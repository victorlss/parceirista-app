import client from './client'

const create = (payload) => {
  return client.request({
    url: `/contracts`,
    method: 'post',
    data: payload
  })
}

const getByUserId = (userId) => {
  return client.request({
    url: `/contracts/user/${userId}`,
    method: 'get'
  })
}

export default { create, getByUserId }
