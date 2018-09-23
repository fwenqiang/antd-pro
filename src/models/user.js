/* global window */
import modelExtend from 'dva-model-extend'
import queryString from 'query-string'
import { config,log } from 'utils'
import { create, remove, update } from 'services/user'
import * as usersService from 'services/users'
import { pageModel } from './common'
import { httpRequest} from 'services/app'
import { message } from 'antd'

const { query } = usersService
const { prefix } = config

export default modelExtend(pageModel, {
  namespace: 'user',

  state: {
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    userDetail:{},
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/user') {
          const payload = queryString.parse(location.search) || { page: 1, pageSize: 10 }
          dispatch({
            type: 'query',
            payload,
          })
        }else if(location.pathname === '/user/detail'){
          const payload = queryString.parse(location.search)
          dispatch({
            type: 'toUserDetail',
            payload,
          })
        }
      })
    },
  },

  effects: {

    * query ({ payload = {} }, { call, put }) {
      let pamas = {url:config.api.queryUserList,data:payload}
      pamas.data.n_page = payload.page?payload.page-1:0
      pamas.data.n_size = payload.pageSize || 10
      const data = yield call(httpRequest, pamas)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.usr_list,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      }
    },

    * queryUserDetail ({ payload = {} }, { call, put }) {
    const usr_id = payload.usr_id
    let pamas = {url:config.api.queryUserDetail,data:payload}
    const data = yield call(httpRequest, pamas)
    if (data) {
      yield put({
        type: 'showModal',
        payload: {
          // modalVisible: true,
          currentItem: data.user,
          modalType: 'update',
        },
      })
    }
  },

    * delete ({ payload={} }, { call, put, select }) {
    log.debug('delete payload',payload)
    let pamas = { url: config.api.deleteUser, data: payload }
    const data = yield call(httpRequest, pamas)
    if (data.success) {
      message.success('删除用户成功！');
      yield put({ type: 'query', payload: { } })
    } else {
      message.error(data.errorMsg);
    }
    },

    * multiDelete ({ payload }, { call, put }) {
      const data = yield call(usersService.remove, payload)
      if (data.success) {
        yield put({ type: 'updateState', payload: { selectedRowKeys: [] } })
      } else {
        throw data
      }
    },

    * create ({ payload }, { call, put }) {
      let pamas = {url:config.api.createUser,data:payload}
      const data = yield call(httpRequest, pamas)
      //console.log('data',data)
      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        message.error(data.errorMsg);
      }
    },

    * update ({ payload }, { select, call, put }) {
      let pamas = {url:config.api.updateUser,data:payload}
      const data = yield call(httpRequest, pamas)
      console.log('data',data)
      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        message.error(data.errorMsg);
      }
    },

    * toUserDetail ({ payload = {} }, { call, put }) {
    console.log('payload',payload)
    let pamas = {url:config.api.queryUserList,data:payload}
    //const data = yield call(httpRequest, pamas)
    yield put({ type: 'updateData',payload:{userDetail:'sdfsf'} })
    /*if (data) {
      yield put({
        type: 'querySuccess',
        payload: {
          list: data.usr_list,
          pagination: {
            current: Number(payload.page) || 1,
            pageSize: Number(payload.pageSize) || 10,
            total: data.total,
          },
        },
      })
    }*/
  },

  },

  reducers: {

    showModal (state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },

    hideModal (state) {
      return { ...state, modalVisible: false }
    },
    updateData (state, { payload }) {
      return { ...state, ...payload }
    },

  },
})
