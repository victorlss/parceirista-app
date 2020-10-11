import ENV from './env'

const authApi = {
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
    fetch(`${ENV.API}'/auth/login'`, config)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((response) => alert(JSON.stringify(response)))
  },

  logout: () =>
    fetch(`${ENV.API}'/auth/logout'`)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((response) => alert(JSON.stringify(response)))
};

export default authApi