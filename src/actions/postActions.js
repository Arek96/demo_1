export const ADD_POST = "ADD_POST";

export const addPost = data => ({
  type: ADD_POST,
  payload: {
    post: {
      title: data.post.title,
      description: data.post.text,
      photo: data.photo
    }
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
      .then(r => console.log(r))
      .then(dispatch(addPost(formData)));
  };
};
