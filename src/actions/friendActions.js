export const SEARCH_FRIEND = "SEARCH_FRINED";
export const ADD_FRIEND = "ADD_FRIEND";
export const GET_FRIENDS = "GET_FRIENDS";

export const searchFriend = matchingFriends => ({
  type: SEARCH_FRIEND,
  payload: {
    matchingFriends
  }
});
export const fetchSearchFriend = (friendValue, authToken) => {
  return dispatch => {
    return fetch(
      `https://delfinkitrainingapi.azurewebsites.net/api/user/${friendValue}`,
      {
        method: "GET",
        headers: { "X-ZUMO-AUTH": authToken }
      }
    )
      .then(r => r.json())
      .then(resp => {
        console.log(resp);
        dispatch(searchFriend(resp));
      });
  };
};

export const getFriends = data => ({
  type: GET_FRIENDS,
  payload: {
    friends: data
  }
});
export const getFriendsFromAPI = authToken => {
  return dispatch => {
    return fetch("https://delfinkitrainingapi.azurewebsites.net/api/friend", {
      method: "GET",
      headers: {
        "X-ZUMO-AUTH": authToken,
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => dispatch(getFriends(resp)));
  };
};
export const addFriend = resp => ({
  type: ADD_FRIEND,
  payload: {
    friend: {
      Name: resp.Name,
      GivenName: resp.GivenName,
      Id: resp.Id,
      Photo: resp.Photo,
      Show: resp.Show
    }
  }
});
export const fetchFriendToApi = (authToken, friendID) => {
  return dispatch => {
    return fetch("https://delfinkitrainingapi.azurewebsites.net/api/friend", {
      method: "POST",
      headers: {
        "X-ZUMO-AUTH": authToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        FriendId: friendID,
        Show: false
      })
    })
      .then(r => r.json())
      .then(resp => dispatch(addFriend(resp)));
  };
};
