import { LOG_IN, LOG_OUT } from "../actions/loginActions";
import { GET_USER, UPDATE_USER, REMOVE_USER } from "../actions/userActions";
import {
  ADD_POST,
  GET_POSTS,
  DELETE_POST,
  EDIT_POST,
  SEARCH_POST
} from "../actions/postActions";
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
      return {
        ...state,
        user: action.payload.user
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload.post, ...state.posts]
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
        allPosts: action.payload.posts,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(
          onePost => onePost.Id !== action.payload.postToDel.Id
        )
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(onePost =>
          onePost.Id === action.payload.editedPost.Id
            ? action.payload.editedPost
            : onePost
        )
      };
    case SEARCH_POST:
      console.log(state.posts)
      return {
        ...state,
        posts: action.payload.value && action.payload.value.length > 0
          ? state.posts.filter(post => {
            return (post.Title.toLowerCase().includes(action.payload.value) || post.Text.toLowerCase().includes(action.payload.value)) ? post : null
          })
          : state.allPosts
      };

    case UPDATE_USER:
      return {
        ...state,
        user: action.payload.user
      };
    case REMOVE_USER:
      return {
        state: null
      };
    default:
      return state;
  }
};
export default reducer;
