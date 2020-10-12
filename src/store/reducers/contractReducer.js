const initialState = {
  contracts: []
}

const contractReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONTRACTS':
      return {...state, ...action.payload};
    default:
      return state
  }
}

export default contractReducer
