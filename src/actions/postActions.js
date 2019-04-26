export const ADD_POST = "ADD_POST";
export const GET_POSTS = "GET_POSTS";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

export const addPost = (formData, resp) => ({
  type: ADD_POST,
  payload: {
    post: {
      Title: JSON.parse(formData.get("post")).title,
      Text: JSON.parse(formData.get("post")).text,
      Id: resp.Id,
      ThumbnailPhoto: resp.ThumbnailPhoto,
      PublishDate: resp.PublishDate,
      UserId: resp.UserId
    }
  }
});

export const getPosts = data => ({
  type: GET_POSTS,
  payload: {
    posts: data
  }
});

export const editPost = post => ({
  type: EDIT_POST,
  payload: {
    editedPost: post
  }
});
export const deletePost = post => ({
  type: DELETE_POST,
  payload: {
    postToDel: post
  }
});
export const fetchEditedPostToAPI = (postId, formData, authToken) => {
  return dispatch => {
    fetch(`https://delfinkitrainingapi.azurewebsites.net/api/post/${postId}`, {
      method: "PUT",
      headers: {
        "X-ZUMO-AUTH": authToken
      },
      body: formData
    })
      .then(r => r.json())
      .then(resp => {
        dispatch(editPost(resp));
      });
  };
};
export const deletePostFromApi = (post, authToken) => {
  return dispatch => {
    fetch(`https://delfinkitrainingapi.azurewebsites.net/api/post/${post.Id}`, {
      method: "DELETE",
      headers: {
        "X-ZUMO-AUTH": authToken
      }
    })
      .then(r => console.log(r))
      .then(resp => dispatch(deletePost(post)));
  };
};

export const fetchPostToAPI = (formData, authToken) => {
  return dispatch => {
    return fetch("https://delfinkitrainingapi.azurewebsites.net/api/post", {
      method: "POST",
      headers: {
        "X-ZUMO-AUTH": authToken
      },
      body: formData
    })
      .then(r => r.json())
      .then(resp => dispatch(addPost(formData, resp), console.log(resp)));
  };
};

export const getPostsFromAPI = authToken => {
  return dispatch => {
    return fetch(`https://delfinkitrainingapi.azurewebsites.net/api/post/`, {
      method: "GET",
      headers: { "X-ZUMO-AUTH": authToken }
    })
      .then(r => r.json())
      .then(resp => {
        console.log(resp);
        return dispatch(getPosts(resp));
      });
  };
};
