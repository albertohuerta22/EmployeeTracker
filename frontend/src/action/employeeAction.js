import axios from 'axios';

//imported actions
import {
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_LIST_FAIL,
} from '../constants/employeeConstants';

export const listEmployees = () => async (dispatch) => {
  try {
    //request made
    dispatch({ type: EMPLOYEE_LIST_REQUEST });
    //request successful
    const { data } = await axios.get(`/api/employees`);

    dispatch({ type: EMPLOYEE_LIST_SUCCESS, payload: data });

    //request unsuccessful
  } catch (error) {
    dispatch({ type: EMPLOYEE_LIST_FAIL, payload: error.message });
  }
};
