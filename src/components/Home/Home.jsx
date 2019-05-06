import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsFromAPI, sortPosts } from "../../actions/postActions";
import {
  getFriendsFromAPI,
  getFriendsPostsFromAPI
} from "../../actions/friendActions";
import Post from "./Post/Post";
import { Grid, Typography } from "@material-ui/core";

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.getPostsFromAPI(this.props.authToken);
    this.props.getFriendsFromAPI(this.props.authToken);
    this.props.getFriendsPostsFromAPI(this.props.authToken);
  }
  componentDidUpdate(prevProps) {
    if (this.props.posts !== prevProps.posts) {
    }
  }
  render() {
    let friendsPosts = this.props.postsFriends
      ? this.props.postsFriends.map(element => {
          return element.Posts;
        })
      : null;
    let friends = this.props.postsFriends
      ? this.props.postsFriends.map(element => {
          return element.Friend;
        })
      : null;
    let allPosts = this.props.postsFriends
      ? this.props.posts.concat(...friendsPosts)
      : this.props.posts;
    console.log(allPosts);
    return (
      <Grid item style={{ width: "100%" }} sm={8} xxl={7}>
        {allPosts && allPosts.length > 0 ? (
          allPosts.sort(sortPosts).map(post => {
            return (
              <Post
                key={post.Id}
                post={post}
                user={
                  post.UserID
                    ? friends.filter(element =>
                        element.UserId === post.UserId ? element : null
                      )
                    : this.props.user
                }
              />
            );
          })
        ) : (
          <Typography variant="h5">You don't have any posts yet. </Typography>
        )}
      </Grid>
    );
  }
}
const mapProps = state => ({
  posts: state.posts,
  authToken: state.authToken,
  user: state.user,
  friends: state.friends,
  postsFriends: state.postsFriends
});
const mapDispatch = dispatch => ({
  getPostsFromAPI: authToken => dispatch(getPostsFromAPI(authToken)),
  getFriendsFromAPI: authToken => dispatch(getFriendsFromAPI(authToken)),
  getFriendsPostsFromAPI: authToken =>
    dispatch(getFriendsPostsFromAPI(authToken))
});
export default connect(
  mapProps,
  mapDispatch
)(Home);
