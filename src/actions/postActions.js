export const ADD_POST = "ADD_POST";
export const GET_POSTS = "GET_POSTS";

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
      .then(resp => dispatch(addPost(formData, resp)));
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
