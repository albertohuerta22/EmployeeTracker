import { combineReducers, configureStore } from '@reduxjs/toolkit';

//imported reducers
import {
  employeesListReducer,
  employeeDeleteReducer,
} from './reducers/employeeReducer';
import { userLoginReducer } from './reducers/userReducer';

const reducer = combineReducers({
  employeeList: employeesListReducer,
  deleteEmployee: employeeDeleteReducer,
  userLogin: userLoginReducer,
});

const initialState = {};

const store = configureStore({
  initialState,
  reducer,
});

export default store;
