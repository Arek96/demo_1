import { LOG_IN, LOG_OUT } from "../actions/loginActions";
import { GET_USER } from "../actions/userActions";
const reducer = (state = { authToken: null }, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        authToken: action.payload.authToken
      };
    case LOG_OUT:
      return { ...state, authToken: null, user: null };
    case GET_USER:
      return {
        ...state,
        user: action.payload.user
      };
    default:
      return state;
  }
};
export default reducer;
