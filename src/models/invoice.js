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
  namespace: 'invoice',

  state: {
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    invoiceDetail: {},
    deleteAllUser: false,
    deleteAllInvoice: false,
    fileName:'',
    user:'',
    invoice:'',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/invoice') {
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

    * query({ payload = {} }, { call, put }) {
      let pamas = { url: config.api.queryInvoiceList, data: payload }
      pamas.data.n_page = payload.page ? payload.page - 1 : 0
      pamas.data.n_size = payload.pageSize || 10
      const data = yield call(httpRequest, pamas)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.invoice_list,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      }
    },

    * queryInvoiceDetail({ payload = {} }, { call, put }) {
      //const usr_id = payload.usr_id
      let pamas = { url: config.api.queryInvoiceDetail, data: payload }
      const data = yield call(httpRequest, pamas)
      if (data) {
        yield put({
          type: 'showModal',
          payload: {
            // modalVisible: true,
            currentItem: data.invoice,
            modalType: 'update',
          },
        })
      }
    },

    * delete({ payload }, { call, put, select }) {
      log.debug('delete payload', payload)
      let pamas = { url: config.api.deleteInvoice, data: payload }
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
      let pamas = { url: config.api.createInvoice, data: payload }
      const data = yield call(httpRequest, pamas)
      //console.log('data',data)
      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        message.error(data.errorMsg);
      }
    },

    * update({ payload }, { select, call, put }) {
      let pamas = { url: config.api.updateInvoice, data: payload }
      const data = yield call(httpRequest, pamas)
      console.log('data', data)
      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        message.error(data.errorMsg);
      }
    },

    * updateInvoiceState({ payload }, { select, call, put }) {
    let pamas = { url: config.api.updateInvoiceState, data: payload }
    const data = yield call(httpRequest, pamas)
    console.log('data', data)
    if (data.success) {
      yield put({ type: 'hideModal' })
    } else {
      message.error(data.errorMsg);
    }
  },

    * toInvoiceDetail({ payload = {} }, { call, put }) {
      console.log('payload', payload)
      let pamas = { url: config.api.queryInvoiceList, data: payload }
      //const data = yield call(httpRequest, pamas)
      yield put({ type: 'updateData', payload: { invoiceDetail: 'sdfsf' } })
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

    * deleteAllInvoice({ payload = {} }, { call, put }) {
      let pamas = { url: config.api.deleteAllInvoice, data: payload }
      const data = yield call(httpRequest, pamas)
      if (data.success) {
        yield put({ type: 'updateData', payload: { deleteAllInvoice: true } })
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
    * importInvoice({ payload = {} }, { call, put }) {
      console.log('importUser',payload)
      let pamas = { url: config.api.importInvoice, data: payload }
      const data = yield call(httpRequest, pamas)
      if (data.success){
        message.success("导入订单成功");
        yield put({ type: 'updateData', payload: { invoice: data.invoice } })
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
