import client from './client'

const login = (username, pass) => {
  return client.request({
    url: '/auth/login',
    method: 'post',
    data: JSON.stringify({
      username: username,
      pass: pass,
    })
  })
}

export default {login}
