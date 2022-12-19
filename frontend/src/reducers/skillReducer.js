import {
  SKILL_LIST_REQUEST,
  SKILL_LIST_SUCCESS,
  SKILL_LIST_FAIL,
} from '../constants/skillConstants';

export const skillsListReducer = (state = { skills: [] }, action) => {
  switch (action) {
    case SKILL_LIST_REQUEST:
      return { loading: true, skills: [] };
    case SKILL_LIST_SUCCESS:
      return {
        loading: false,
        employees: action.payload,
      };
    case SKILL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
