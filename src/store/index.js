import { createStore, combineReducers } from 'redux';
import serviceReducer from "./reducers/serviceReducer";
import userReducer from './reducers/userReducer'

const reducers = combineReducers({
  service: serviceReducer,
  user: userReducer
});

export default createStore(reducers)
