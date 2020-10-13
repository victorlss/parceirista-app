const initialState = {
  list: {}
}

const contractReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONTRACT':
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default contractReducer
