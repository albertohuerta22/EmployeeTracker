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
  EMPLOYEE_UPDATE_RESET,
  EMPLOYEE_UPDATE_FAIL,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_CREATE_RESET,
  EMPLOYEE_CREATE_FAIL,
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAIL,
} from '../constants/employeeConstants.js';

const userInfoFromStorage = JSON.parse(sessionStorage.getItem('userInfo'));

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
    {
      console.log(error.response);
    }
    dispatch({
      type: EMPLOYEE_LIST_FAIL,
      payload:
        error.response && error.response.status !== 500
          ? `Internal Error: ${(error.response.status,
            error.response.statusText)}`
          : `error: ${(error.response.status, error.response.data)}`,
    });
  }
};
export const listEmployeeDetails = (id) => async (dispatch) => {
  try {
    //request made
    dispatch({ type: EMPLOYEE_DETAILS_REQUEST });

    const { token } = userInfoFromStorage;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    //request successful
    const { data } = await axios.get(`/api/employees/${id}`, config);

    dispatch({ type: EMPLOYEE_DETAILS_SUCCESS, payload: data });
    //request unsuccessful
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DETAILS_FAIL,
      payload:
        error.response && error.response.status !== 500
          ? error.response.data
          : `error: ${error.response.status}`,
    });
  }
};

export const deleteEmployee = (id) => async (dispatch, getState) => {
  //passes userinfo to retrieve token
  try {
    dispatch({
      type: EMPLOYEE_DELETE_REQUEST,
    });

    const { token } = userInfoFromStorage;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    // const {
    //   userLogin: { userInfo },
    // } = getState();
    //* not reading my config in delete */
    // const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

    await axios.delete(`/api/employees/${id}`, config);

    dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DELETE_FAIL,
      payload:
        error.response && error.response.status !== 500
          ? error.response.data
          : `error: ${error.response.status}`,
    });
  }
};

export const createEmployee = (employee) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_CREATE_REQUEST });
    const { token } = userInfoFromStorage;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(`/api/employees`, employee, config);

    dispatch({ type: EMPLOYEE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: EMPLOYEE_CREATE_FAIL,
      payload:
        // error.response && error.response.status !== 500
        //   ? error.response.data
        //   : `error: ${error.response.status}`,
        error.response && error.status !== 500
          ? error.response.data
          : error.message,
    });
  }
};

export const updateEmployee = (employee) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_UPDATE_REQUEST });
    const { token } = userInfoFromStorage;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(`/api/employees/`, employee, config);

    dispatch({ type: EMPLOYEE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_UPDATE_FAIL,
      payload:
        error.response && error.response.status !== 500
          ? error.response.data
          : `error: ${error.response.status}`,
    });
  }
};

export const resetEmployee = () => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_UPDATE_RESET });
    dispatch({ type: EMPLOYEE_CREATE_RESET });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_UPDATE_FAIL,
      payload:
        error.response && error.response.status !== 500
          ? error.response.data
          : `error: ${error.response.status}`,
    });
    dispatch({
      type: EMPLOYEE_CREATE_FAIL,
      payload:
        error.response && error.response.status !== 500
          ? error.response.data
          : `error: ${error.response.status}`,
    });
  }
};
