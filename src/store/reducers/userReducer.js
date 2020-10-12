const initialState = {
  isLoggedIn: false,
  data: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      const {user} = state;
      return user;
    default:
      return state
  }
}

export default userReducer
