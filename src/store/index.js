import { createStore, combineReducers } from 'redux';
import serviceReducer from "./reducers/serviceReducer";
import userReducer from './reducers/userReducer'
import contractReducer from "./reducers/contractReducer";

const reducers = combineReducers({
  contract: contractReducer,
  service: serviceReducer,
  user: userReducer
});

export default createStore(reducers)
