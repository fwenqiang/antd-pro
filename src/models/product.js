/* global window */
import modelExtend from 'dva-model-extend'
import queryString from 'query-string'
import { config } from 'utils'
import { create, remove, update } from 'services/user'
import * as usersService from 'services/users'
import { pageModel } from './common'
import { httpRequest} from 'services/app'

const { prefix } = config

export default modelExtend(pageModel, {
  namespace: 'product',

  state: {
    def_url:'',
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    imgListModalVisible: false,
    imgListKey:'',
    fileList:[],
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/product') {
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
      
      let pamas = {url:config.api.queryProduct,data:payload}
      pamas.data.n_page = payload.page?payload.page-1:0
      pamas.data.n_size = payload.pageSize || 10
      console.log('pamas11',pamas)
      const data = yield call(httpRequest, pamas)
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
      const pamas = {url:config.api.deleteProduct,data:{ pro_id: payload }}
      const data = yield call(httpRequest, pamas)
      // const { selectedRowKeys } = yield select(_ => _.user)
      if (data.success) {
        yield put({ type: 'query', payload: { } })
      } else {
        throw data
      }
    },

    * create ({ payload }, { call, put }) {
      const pamas = {url:config.api.addProduct,data:payload}
      const data = yield call(httpRequest, pamas)
      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        throw data
      }
    },

    * update ({ payload }, { select, call, put }) {
      const pamas = {url:config.api.updateProduct,data:payload}
      const data = yield call(httpRequest, pamas)
      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        throw data
      }
    },


    * queryImgList ({ payload = {} }, { call, put }) {
      
    let pamas = {url:config.api.queryProductImgList,data:{pro_id:payload.currentItem.pro_id,img_typ:payload.imgListKey==='2'?'1':'2'}}
    const data = yield call(httpRequest, pamas)
    let fileList = []
    for(var i in data.img_url_list){
      let item = {}
      item.uid = data.img_url_list[i]['img_id']
      item.name = data.img_url_list[i]['img_url']
      item.status = 'done'
      item.url = data.img_url_list[i]['img_url']
      fileList.push(item)
    }
    console.log('fileList',fileList)

    if (data.success) {
      yield put({
        type: 'updateData',
        payload: {
          fileList: fileList,    
          imgListModalVisible: true,
          imgListKey:payload.imgListKey,
          currentItem: payload.currentItem,      
        },
      })
    }
  },

  },

  reducers: {

    showModal (state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },

    hideModal (state) {
      return { ...state, modalVisible: false,def_url:'' }
    },
    updateData (state, { payload }) {
      return { ...state, ...payload }
    },

  },
})
