import { combineReducers, configureStore } from '@reduxjs/toolkit';

//imported reducers
import { employeesListReducer } from './reducers/employeeReducer';

const reducer = combineReducers({
  employeeList: employeesListReducer,
});

const initialState = {};

const store = configureStore({
  initialState,
  reducer,
});

export default store;
