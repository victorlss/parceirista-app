import ENV from './env'

const authApi = {
  isLogged: () => authApi.user,
  user: {},

  login: (username, pass) => {
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        pass: pass,
      })
    };
    return fetch(`${ENV.API}/auth/login`, config)
      .then((response) => response.json())
      .then((response) => authApi.user = response)
  },

  logout: () => authApi.user = ({})
};

export default authApi