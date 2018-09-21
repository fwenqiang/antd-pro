/* global window */
import modelExtend from 'dva-model-extend'
import queryString from 'query-string'
import { config, log } from 'utils'
// import { create, remove, update } from 'services/user'
// import * as usersService from 'services/users'
import { pageModel } from './common'
import { httpRequest } from 'services/app'
import { message } from 'antd'

// const { query } = usersService
// const { prefix } = config

export default modelExtend(pageModel, {
  namespace: 'order',

  state: {
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    orderDetail: {},
    deleteAllUser: false,
    deleteAllOrder: false,
    fileName:'',
    user:'',
    order:'',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/order') {
          const payload = queryString.parse(location.search) || { page: 1, pageSize: 10 }
          dispatch({
            type: 'query',
            payload,
          })
        } else if (location.pathname === '/order/import') {
          dispatch({
            type: 'updateData',
            payload:{deleteAllUser: false,
              deleteAllOrder: false,},
          })
        }
      })
    },
  },

  effects: {

    * query({ payload = {} }, { call, put }) {
      log.info('query', 'this is query')
      let pamas = { url: config.api.queryOrderList, data: payload }
      pamas.data.n_page = payload.page ? payload.page - 1 : 0
      pamas.data.n_size = payload.pageSize || 10
      const data = yield call(httpRequest, pamas)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.order_list,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      }
    },

    * queryOrderDetail({ payload = {} }, { call, put }) {
      //const usr_id = payload.usr_id
      let pamas = { url: config.api.queryOrderDetail, data: payload }
      const data = yield call(httpRequest, pamas)
      if (data) {
        yield put({
          type: 'showModal',
          payload: {
            // modalVisible: true,
            currentItem: data.order,
            modalType: 'update',
          },
        })
      }
    },

    * delete({ payload }, { call, put, select }) {
      log.debug('delete payload', payload)
      let pamas = { url: config.api.deleteOrder, data: payload }
      const data = yield call(httpRequest, pamas)
      if (data.success) {
        message.success('删除订单成功！');
        yield put({ type: 'query', payload: {} })
      } else {
        message.error(data.errorMsg);
      }
    },

    * multiDelete({ payload }, { call, put }) {
      const data = yield call(usersService.remove, payload)
      if (data.success) {
        yield put({ type: 'updateState', payload: { selectedRowKeys: [] } })
      } else {
        throw data
      }
    },

    * create({ payload }, { call, put }) {
      let pamas = { url: config.api.createOrder, data: payload }
      const data = yield call(httpRequest, pamas)
      //console.log('data',data)
      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        message.error(data.errorMsg);
      }
    },

    * update({ payload }, { select, call, put }) {
      let pamas = { url: config.api.updateOrder, data: payload }
      const data = yield call(httpRequest, pamas)
      console.log('data', data)
      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        message.error(data.errorMsg);
      }
    },

    * updateOrderState({ payload }, { select, call, put }) {
    let pamas = { url: config.api.updateOrderState, data: payload }
    const data = yield call(httpRequest, pamas)
    console.log('data', data)
    if (data.success) {
      yield put({ type: 'hideModal' })
    } else {
      message.error(data.errorMsg);
    }
  },

    * toOrderDetail({ payload = {} }, { call, put }) {
      console.log('payload', payload)
      let pamas = { url: config.api.queryOrderList, data: payload }
      //const data = yield call(httpRequest, pamas)
      yield put({ type: 'updateData', payload: { orderDetail: 'sdfsf' } })
    },

    * deleteAllUser({ payload = {} }, { call, put }) {
      //const usr_id = payload.usr_id
      let pamas = { url: config.api.deleteAllUser, data: payload }
      const data = yield call(httpRequest, pamas)
      if (data.success) {
        yield put({ type: 'updateData', payload: { deleteAllUser: true } })
      } else {
        message.error(data.errorMsg);
      }
    },

    * deleteAllOrder({ payload = {} }, { call, put }) {
      let pamas = { url: config.api.deleteAllOrder, data: payload }
      const data = yield call(httpRequest, pamas)
      if (data.success) {
        yield put({ type: 'updateData', payload: { deleteAllOrder: true } })
      } else {
        message.error(data.errorMsg);
      }
    },
    * importUser({ payload = {} }, { call, put }) {
      console.log('importUser',payload)
      let pamas = { url: config.api.importUser, data: payload }
      const data = yield call(httpRequest, pamas)
      if (data.success) {
        message.success("导入用户成功");
        yield put({ type: 'updateData', payload: { user: data.user } })
      }else {
        message.error(data.errorMsg);
      }
    },
    * importOrder({ payload = {} }, { call, put }) {
      console.log('importUser',payload)
      let pamas = { url: config.api.importOrder, data: payload }
      const data = yield call(httpRequest, pamas)
      if (data.success){
        message.success("导入订单成功");
        yield put({ type: 'updateData', payload: { order: data.order } })
      }else {
        message.error(data.errorMsg);
      }
    },

    * saveFileName({ payload = {} }, { call, put }) {
    yield put({ type: 'updateData', payload: { fileName: payload.fileName } })
  },

  },

  reducers: {

    showModal(state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },

    hideModal(state) {
      return { ...state, modalVisible: false }
    },
    updateData(state, { payload }) {
      return { ...state, ...payload }
    },

  },
})
