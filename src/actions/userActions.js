export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const REMOVE_USER = "REMOVE_USER";

export const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};
export const updateUser = formData => {
  return {
    type: UPDATE_USER,
    payload: {
      user: {
        ...JSON.parse(formData.get("user")),
        photo: formData.get("photo")
      }
    }
  };
};

export const getUser = data => {
  return {
    type: GET_USER,
    payload: {
      user: {
        GivenName: data.GivenName,
        Name: data.Name,
        Id: data.Id,
        Photo: data.Photo
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

export const fetchUpdatedUser = (formData, authToken) => {
  return dispatch => {
    return fetch(`https://delfinkitrainingapi.azurewebsites.net/api/user`, {
      method: "PUT",
      headers: {
        "X-ZUMO-AUTH": authToken
      },
      body: formData
    })
      .then(r => r.json())
      .then(resp => {
        console.log(resp);
        // return dispatch(updateUser(resp))
      });
    // .catch(r => console.log(r))
  };
};
export const fetchRemoveUser = authToken => dispatch => {
  fetch(`https://delfinkitrainingapi.azurewebsites.net/api/user`, {
    method: "DELETE",
    headers: {
      "X-ZUMO-AUTH": authToken
    }
  }).then(r => console.log(r));
  return dispatch(removeUser());
};
