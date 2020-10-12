import ENV from './env'

const serviceApi = {
  getCategories: async () => {
    await sleep(1000)
    return [
      {
        name: 'Design Marketing',
        icon: 'hands-helping',
        id: 'design-marketing',
        services: [
          'Logo',
          'Capa para Instagram',
          'Plano de Marketing'
        ]
      },
      {
        name: 'Planejamento de Negócio',
        icon: 'hands-helping',
        id: 'planejamento-negocio',
        services: [
          'Plano de Negócio',
          'Precificação',
          'Estratégia de Negocio'
        ]
      },
      {
        name: 'Contabilidade',
        icon: 'hands-helping',
        id: 'contabilidade',
        services: [
          'Controle de Caixa',
          'Previsao de Lucro',
          'Impostos e Taxas'
        ]
      },
    ]
  },
  get: (serviceId) => {
    return fetch(`${ENV.API}/services/${serviceId}`)
      .then((response) => response.json())
      .then((response) => response.services)
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default serviceApi