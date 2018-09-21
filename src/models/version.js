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
  namespace: 'version',

  state: {
    currentItem: {},
    iosVersion: '',
    androidVersion: '',
    versionDetail:{},
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/version') {
          dispatch({
            type: 'queryVersion',
            payload:{},
          })
        }
      })
    },
  },

  effects: {

    * queryVersion ({ payload = {} }, { call, put }) {
    let pamas = {url:config.api.queryVersion,data:''}
    const data = yield call(httpRequest, pamas)
    if (data.success) {
      yield put({
        type: 'updateData',
        payload: {
          iosVersion: data.iosVersion,
          androidVersion: data.androidVersion,
        },
      })
    }
  },

    * updateVersion ({ payload={} }, { call, put, select }) {
    log.debug('delete payload',payload)
    let pamas = { url: config.api.updateVersion, data: payload }
    const data = yield call(httpRequest, pamas)
    if (data.success) {
      message.success('保存成功');
      // yield put({ type: 'query', payload: { } })
    } else {
      message.error(data.errorMsg);
    }
    },

    


  },

  reducers: {
    updateData (state, { payload }) {
      return { ...state, ...payload }
    },

  },
})
