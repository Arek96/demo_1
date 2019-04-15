export const GET_USER = "GET_USER";

export const getUser = data => {
  return {
    type: GET_USER,
    payload: {
      user: {
        name: data.GivenName,
        surname: data.Name,
        id: data.Id,
        photo: data.Photo
      }
    }
  };
};
export const fetchUser = authToken => {
  return dispatch => {
    return fetch(`https://delfinkitrainingapi.azurewebsites.net/api/user`, {
      method: "GET",
      headers: {
        "X-ZUMO-AUTH": authToken
      }
    })
      .then(r => r.json())
      .then(resp => {
        console.log(resp);
        return dispatch(getUser(resp));
      });
  };
};

export const updateUser = updatedData => {
  return dispatch =>
    fetch(`https://delfinkitrainingapi.azurewebsites.net/api/user`, {
      method: "PUT",
      headers: { "X-ZUMO-AUTH": this.props.authToken },
      body: formData
    }).then(r => console.log(r));
};
