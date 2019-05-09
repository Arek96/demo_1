export const SEARCH_FRIEND = "SEARCH_FRIEND";
export const ADD_FRIEND = "ADD_FRIEND";
export const GET_FRIENDS = "GET_FRIENDS";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const GET_POSTS_FRIENDS = "GET_POSTS_FRIENDS";
export const SEARCH_IN_FRIENDS = "SEARCH_IN_FRIENDS";

const sortFriends = (a, b) => {
  if (a.Name < b.Name) return -1;
  if (a.Name > b.Name) return 1;
  return 0;
};
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
    friends: data.sort(sortFriends)
  }
});

export const searchInFriends = value => ({
  type: SEARCH_IN_FRIENDS,
  payload:{
    value
  }
})

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
export const deleteFriend = friend => ({
  type: DELETE_FRIEND,
  payload: {
    friendToDel: friend
  }
});
export const deleteFriendFromAPI = (friend, authToken) => {
  return dispatch => {
    fetch(
      `https://delfinkitrainingapi.azurewebsites.net/api/friend/${friend.Id}`,
      {
        method: "DELETE",
        headers: {
          "X-ZUMO-AUTH": authToken
        }
      }
    )
      .then(r => console.log(r))
      .then(resp => dispatch(deleteFriend(friend)));
  };
};

export const getFriendsPosts = data => ({
  type: GET_POSTS_FRIENDS,
  payload: {
    postsFriends: data
  }
});

export const getFriendsPostsFromAPI = authToken => {
  return dispatch => {
    return fetch(
      `https://delfinkitrainingapi.azurewebsites.net/api/post/friend`,
      {
        method: "GET",
        headers: { "X-ZUMO-AUTH": authToken }
      }
    )
      .then(r => r.json())
      .then(resp => dispatch(getFriendsPosts(resp)));
  };
};
