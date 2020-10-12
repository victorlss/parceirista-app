import client from './client'

const getByUserId = (userId) => {
  return client.request({
    url: `/contracts/user/${userId}`,
    method: 'get'
  })
}

export default { getByUserId }
