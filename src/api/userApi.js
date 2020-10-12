import ENV from './env'

const userApi = {
  getProfessionals: () =>
    fetch(`${ENV.API}/professional`)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((response) => alert(JSON.stringify(response))),

  getBusinesses: () =>
    fetch(`${ENV.API}/business`)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((response) => alert(JSON.stringify(response)))
};

export default userApi