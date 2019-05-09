import { LOG_IN, LOG_OUT } from "../actions/loginActions";
import { GET_USER, UPDATE_USER, REMOVE_USER } from "../actions/userActions";
import {
  ADD_POST,
  GET_POSTS,
  DELETE_POST,
  EDIT_POST,
  SEARCH_POST
} from "../actions/postActions";
import {
  SEARCH_FRIEND,
  GET_FRIENDS,
  ADD_FRIEND,
  DELETE_FRIEND,
  GET_POSTS_FRIENDS,
  SEARCH_IN_FRIENDS
} from "../actions/friendActions";
const reducer = (
  state = { authToken: null, posts: [], friends: [] },
  action
) => {
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
        allPosts: action.payload.posts
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
      return {
        ...state,
        posts:
          action.payload.value && action.payload.value.length > 0
            ? state.posts.filter(post => {
                return post.Title.toLowerCase().includes(
                  action.payload.value
                ) || post.Text.toLowerCase().includes(action.payload.value)
                  ? post
                  : null;
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
    case GET_FRIENDS:
      return {
        ...state,
        allFriends: action.payload.friends
      };
    case ADD_FRIEND:
      return {
        ...state,
        allFriends: [action.payload.friend, ...state.allFriends]
      };
    case SEARCH_FRIEND:
      return {
        ...state,
        matchingFriends: action.payload.matchingFriends
      };
    case DELETE_FRIEND:
      return {
        ...state,
        allFriends: state.allFriends.filter(
          friend => friend.Id !== action.payload.friendToDel.Id
        )
      };
    case GET_POSTS_FRIENDS:
      return {
        ...state,
        postsFriends: action.payload.postsFriends
      };
    default:
      return state;
  }
};
export default reducer;
