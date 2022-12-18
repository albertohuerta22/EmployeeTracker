import { combineReducers, configureStore } from '@reduxjs/toolkit';

//imported reducers
import {
  employeesListReducer,
  employeeDeleteReducer,
  employeeCreateReducer,
} from './reducers/employeeReducer';
import { userLoginReducer } from './reducers/userReducer';

const reducer = combineReducers({
  employeeList: employeesListReducer,
  createEmployee: employeeCreateReducer,
  deleteEmployee: employeeDeleteReducer,
  userLogin: userLoginReducer,
});

const initialState = {};

const store = configureStore({
  initialState,
  reducer,
});

export default store;
