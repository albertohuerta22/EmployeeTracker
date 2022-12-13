import { combineReducers, configureStore } from '@reduxjs/toolkit';

//imported reducers
import { employeesListReducer } from './reducers/employeeReducer';
import { userLoginReducer } from './reducers/userReducer';

const reducer = combineReducers({
  employeeList: employeesListReducer,
  userLogin: userLoginReducer,
});

const initialState = {};

const store = configureStore({
  initialState,
  reducer,
});

export default store;
