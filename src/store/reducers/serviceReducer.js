const initialState = {
  service: {}
}

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SERVICE':
      return {...state, ...action.payload};
    default:
      return state
  }
}

export default serviceReducer
