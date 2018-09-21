/* global window */
import modelExtend from 'dva-model-extend'
import queryString from 'query-string'
import { config } from 'utils'
import { create, remove, update } from 'services/user'
import * as usersService from 'services/users'
import { pageModel } from './common'
import { httpRequest} from 'services/app'

const { query } = usersService
const { prefix } = config

export default modelExtend(pageModel, {
  namespace: 'poster',

  state: {
    bor_url:'',
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    // selectedRowKeys: [],
    // isMotion: window.localStorage.getItem(`${prefix}userIsMotion`) === 'true',
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/poster') {
          const payload = queryString.parse(location.search) || { page: 1, pageSize: 10 }
          dispatch({
            type: 'query',
            payload,
          })
        }
      })
    },
  },

  effects: {

    * query ({ payload = {} }, { call, put }) {
      
      let pamas = {url:config.api.queryPoster,data:payload}
      pamas.data.n_page = payload.page?payload.page-1:0
      pamas.data.n_size = payload.pageSize || 10
      console.log('pamas',pamas)
      const data = yield call(httpRequest, pamas)
      //const data = yield call(query, payload)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.list,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      }
    },

    * delete ({ payload }, { call, put, select }) {
      const pamas = {url:config.api.deletePoster,data:{ bor_id: payload }}
      const data = yield call(httpRequest, pamas)
      // const { selectedRowKeys } = yield select(_ => _.user)
      if (data.success) {
        yield put({ type: 'query', payload: { } })
      } else {
        throw data
      }
    },

    /* multiDelete ({ payload }, { call, put }) {
      const data = yield call(usersService.remove, payload)
      if (data.success) {
        yield put({ type: 'updateState', payload: { selectedRowKeys: [] } })
      } else {
        throw data
      }
    },*/

    * create ({ payload }, { call, put }) {
      const pamas = {url:config.api.addPoster,data:payload}
      const data = yield call(httpRequest, pamas)
      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        throw data
      }
    },

    * update ({ payload }, { select, call, put }) {
      // const currentItem = yield select(({ poster }) => poster.currentItem)  //获得models
      const pamas = {url:config.api.updatePoster,data:payload}
      const data = yield call(httpRequest, pamas)
      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        throw data
      }
    },

  },

  reducers: {

    showModal (state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },

    hideModal (state) {
      return { ...state, modalVisible: false,bor_url:'' }
    },
    updateData (state, { payload }) {
      return { ...state, ...payload }
    },

  },
})
