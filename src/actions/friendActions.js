export const SEARCH_FRIEND = "SEARCH_FRINED";
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
