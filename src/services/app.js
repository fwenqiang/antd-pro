import { request, config } from 'utils'

const { api } = config
const { user, userLogout, userLogin } = api

export function login (params) {
  return request({
    url: userLogin,
    method: 'post',
    data: params,
  })
}

export function logout (params) {
  return request({
    url: userLogout,
    method: 'get',
    data: params,
  })
}

export function httpRequest ({url,data}) {
  return request({
    url: url,
    method: 'post',
    data: data,
  })
}
