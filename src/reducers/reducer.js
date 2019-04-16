import { LOG_IN, LOG_OUT } from "../actions/loginActions";
import { GET_USER } from "../actions/userActions";
import { ADD_POST, GET_POSTS } from "../actions/postActions";
const reducer = (state = { authToken: null, posts: [] }, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        authToken: action.payload.authToken
      };
    case LOG_OUT:
      return { ...state, authToken: null, user: null };
    case GET_USER:
      console.log(action);
      return {
        ...state,
        user: action.payload.user
      };
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload.post)
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload.posts
      };
    default:
      return state;
  }
};
export default reducer;
