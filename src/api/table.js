import request from '@/utils/axios'

export function getList(params) {
  console.log('这个api地址肯定是无效的!')
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
