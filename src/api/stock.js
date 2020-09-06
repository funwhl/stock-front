import request from '@/utils/request'

export function stockCode(query) {
  return request({
    url: '/stockCode',
    method: 'post',
    params: query
  })
}
