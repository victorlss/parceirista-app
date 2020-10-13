import ENV from './env'

const serviceApi = {
  getCategories: async () => {
    await sleep(500)
    return [
      {
        name: 'Design Marketing',
        icon: 'pencil-alt',
        id: 'design-marketing',
        services: [
          'Logo',
          'Capa para Instagram',
          'Plano de Marketing'
        ]
      },
      {
        name: 'Planejamento de Negócio',
        icon: 'user-tie',
        id: 'planejamento-negocio',
        services: [
          'Plano de Negócio',
          'Precificação',
          'Estratégia de Negocio'
        ]
      },
      {
        name: 'Contabilidade',
        icon: 'calculator',
        id: 'contabilidade',
        services: [
          'Controle de Caixa',
          'Previsao de Lucro',
          'Impostos e Taxas'
        ]
      },
    ]
  },
  get: async (serviceId) => {
    return fetch(`${ENV.API}/services/${serviceId}`)
      .then((response) => response.json())
      .then((response) => response.services)
  },
  getByProfessionalId: async (professionalId) => {
    return fetch(`${ENV.API}/services/professional/${professionalId}`)
      .then((response) => response.json())
      .then((response) => response.services)
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default serviceApi
