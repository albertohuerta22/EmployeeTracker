import axios from 'axios';

//imported actions
import {
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_DELETE_FAIL,
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_UPDATE_FAIL,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_CREATE_FAIL,
} from '../constants/employeeConstants';

const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'));

export const listEmployees = () => async (dispatch) => {
  try {
    //request made
    dispatch({ type: EMPLOYEE_LIST_REQUEST });

    const { token } = userInfoFromStorage;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    //request successful
    const { data } = await axios.get(`/api/employees`, config);

    dispatch({ type: EMPLOYEE_LIST_SUCCESS, payload: data });
    //request unsuccessful
  } catch (error) {
    dispatch({
      type: EMPLOYEE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteEmployee = (id) => async (dispatch, getState) => {
  //passes userinfo to retrieve token
  try {
    dispatch({
      type: EMPLOYEE_DELETE_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();
    //* not reading my config in delete */
    // const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

    await axios.delete(`/api/employees/${id}`);

    dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createEmployee = (employee) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_CREATE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`/api/employees`, employee);

    dispatch({ type: EMPLOYEE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
