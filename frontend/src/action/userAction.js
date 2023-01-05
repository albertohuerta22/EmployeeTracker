import axios from 'axios';
// import redis from 'redis';

//import constants
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants.js';

// const client = redis.createClient();
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      { username, password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    sessionStorage.setItem('userInfo', JSON.stringify(data));

    // client.set('userinfo', 3600, data);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  sessionStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};
