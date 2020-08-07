import * as types from "../constants/auth.constants";
const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
    case types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
      };
    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
      return { ...state, loading: false };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
