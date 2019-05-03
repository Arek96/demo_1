export const ADD_FRIEND = "ADD_FRIEND"
export const GET_FRIENDS = "GET_FRIENDS"

export const getFriends = data => ({
    type: GET_FRIENDS,
    payload: {
        friends: data
    }
})
export const getFriendsFromAPI = authToken => {
    return dispatch => {
        return fetch("https://delfinkitrainingapi.azurewebsites.net/api/friend", {
            method: "GET",
            headers: {
                "X-ZUMO-AUTH": authToken,
                'Content-Type': 'application/json'
            }
        })
            .then(r => r.json())
            .then(resp => dispatch(getFriends(resp)));
    }
}
export const addFriend = resp => ({
    type: ADD_FRIEND,
    payload: {
        friend: {
            Name: resp.Name,
            GivenName: resp.GivenName,
            Id: resp.Id,
            Photo: resp.Photo,
            Show: resp.Show,
        }
    }
})
export const fetchFriendToApi = (authToken, friendID) => {
    return dispatch => {
        return fetch("https://delfinkitrainingapi.azurewebsites.net/api/friend", {
            method: "POST",
            headers: {
                "X-ZUMO-AUTH": authToken,
                'Content-Type': 'application/json'
            },
            body: {
                "FriendId": friendID,
                "Show": false,
            }
        })
            .then(r => r.json())
            .then(resp => dispatch(addFriend(resp)))
    }
}