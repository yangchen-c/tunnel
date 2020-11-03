import request from '@/utils/request'

// 上传文件
const uploadPath = process.env.VUE_APP_BASE_API + '/upload'
export { uploadPath }

export function uploadFile(data) {
  return request({
    url: '/upload',
    method: 'post',
    data
  })
}


// yc客户管理
export function customerList(params, params1) {
  return request({
    url: `customer/getPaging/${params.page}/${params.size}`,
    method: 'get',
    params: params1
  })
}

export function customerAdd(data) {
  return request({
    url: 'customer',
    method: 'post',
    data
  })
}

export function customerUpdate(data) {
  return request({
    url: 'customer',
    method: 'put',
    data
  })
}

export function customerDelete(params) {
  return request({
    url: 'customer',
    method: 'delete',
    params
  })
}

