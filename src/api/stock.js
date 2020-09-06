import request from '@/utils/request'

export function stockCode(query) {
  return request({
    url: '/stockCode',
    method: 'get',
    params: query
  })
}
