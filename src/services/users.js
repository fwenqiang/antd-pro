import { request, config,oldRequest } from 'utils'

const { api } = config
const { users } = api

export function query (params) {
  return oldRequest({
    url: users,
    method: 'get',
    data: params,
  })
}

export function remove (params) {
  return oldRequest({
    url: users,
    method: 'delete',
    data: params,
  })
}
