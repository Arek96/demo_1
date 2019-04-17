export const GET_USER = "GET_USER";

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
