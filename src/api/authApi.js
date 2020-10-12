import client from './client'

const login = (username, pass) => {
  return client.request({
    url: '/auth/login',
    method: 'post',
    data: {
      username,
      pass,
    }
  })
}

export default {login}
