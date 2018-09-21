import { oldRequest, config } from 'utils'

const { api } = config
const { posts } = api

export function query (params) {
  return oldRequest({
    url: posts,
    method: 'get',
    data: params,
  })
}
