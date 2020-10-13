import { createStore, combineReducers } from 'redux';
import contractReducer from "./reducers/contractReducer";
import serviceReducer from "./reducers/serviceReducer";
import userReducer from './reducers/userReducer'

const reducers = combineReducers({
  contract: contractReducer,
  service: serviceReducer,
  user: userReducer
});

export default createStore(reducers)
