import ENV from './env'

const contractApi = {
  create: (contract) => {
    const example = {
      "businessId": "5f81fb67350dfd2270283a68",
      "professionalId": "asdasas",
      "description": "Criacao de logomarca",
      "deliveryDeadInDays": 30,
      "paymentDeadInDays": 90,
      "fee": 20,
      "discount": 10
    };

    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(example)
    };
    return fetch(`${ENV.API}'/contracts`, config)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((response) => alert(JSON.stringify(response)))
  },

  getAll: (userId) =>
    fetch(`${ENV.API}/contracts/user/${userId}`)
      .then(response => response.json())
      .then(response => response.contracts)
};

export default contractApi