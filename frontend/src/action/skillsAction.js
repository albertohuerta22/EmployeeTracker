import axios from 'axios';

import {
  SKILL_LIST_REQUEST,
  SKILL_LIST_SUCCESS,
  SKILL_LIST_FAIL,
} from '../constants/skillConstants.js';

export const listSkills = () => async (dispatch) => {
  try {
    dispatch({ type: SKILL_LIST_REQUEST });

    const { data } = await axios.get('/api/skills');

    dispatch({ type: SKILL_LIST_SUCCESS, payload: data });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: SKILL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
