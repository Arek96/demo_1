import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Home.module.scss";
import { getPostsFromAPI } from "../../actions/postActions";
import Post from "./Post/Post";
import { Grid } from "@material-ui/core";

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.props.getPostsFromAPI(this.props.authToken);
  }
  componentDidUpdate(prevProps) {
    if (this.props.posts !== prevProps.posts) {
      //this.props.getPostsFromAPI(this.props.authToken);
    }
  }
  render() {
    return (
      <Grid item style={{ width: "100%" }} sm={8} xxl={7}>
        {this.props.posts.map(post => {
          return <Post key={post.Id} post={post} user={this.props.user} />;
        })}
      </Grid>
    );
  }
}
const mapProps = state => ({
  posts: state.posts,
  authToken: state.authToken,
  user: state.user
});
const mapDispatch = dispatch => ({
  getPostsFromAPI: authToken => dispatch(getPostsFromAPI(authToken))
});
export default connect(
  mapProps,
  mapDispatch
)(Home);
