import { routerRedux } from 'dva/router'
import { login } from 'services/login'
import { message } from 'antd'
import { Base64 } from 'js-base64';

export default {
  namespace: 'login',

  state: {},

  effects: {
    * login ({
      payload,
    }, { put, call, select }) {
      let parm = {username:payload.username,password:Base64.encode(payload.password)}
      const data = yield call(login, parm)
      const en = Base64.encode(payload.password)
      console.log('base64 data',en)
      const { locationQuery } = yield select(_ => _.app)
      if (data.success) {
        sessionStorage.setItem('CONSOLE_USER_KEY',data.CONSOLE_USER_KEY)
        const { from } = locationQuery
        yield put({ type: 'app/query' })
        if (from && from !== '/login') {
          yield put(routerRedux.push(from))
        } else {
          yield put(routerRedux.push('/dashboard'))
        }
      } else {
          message.error(data.errorMsg)
        // throw data
      }
    },
  },

}
