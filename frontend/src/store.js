import { combineReducers, configureStore } from '@reduxjs/toolkit';

//imported reducers
import {
  employeesListReducer,
  employeeDetailsReducer,
  employeeDeleteReducer,
  employeeCreateReducer,
  employeeUpdateReducer,
} from './reducers/employeeReducer.js';
import { userLoginReducer } from './reducers/userReducer.js';
import { skillsListReducer } from './reducers/skillReducer.js';

const reducer = combineReducers({
  employeeList: employeesListReducer,
  employeeDetails: employeeDetailsReducer,
  createEmployee: employeeCreateReducer,
  deleteEmployee: employeeDeleteReducer,
  updateEmployee: employeeUpdateReducer,
  userLogin: userLoginReducer,
  skillList: skillsListReducer,
});

const initialState = {};

const store = configureStore({
  initialState,
  reducer,
});

export default store;
