import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import style from "../UserProfile/UserProfile.module.scss";
import PostModal from "../PostModal/PostModal";
import { connect } from "react-redux";
import { getPostsFromAPI } from "../../actions/postActions";

class PostPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      currentPost: ""
    };
  }
  setOpenModal = post => {
    this.setState(prevState => ({
      openModal: !prevState.openModal,
      currentPost: post
    }));
  };
  componentDidMount() {
    this.props.getPostsFromAPI(this.props.authToken);
  }
  render() {
    const { openModal, currentPost } = this.state;
    console.log(this.props.posts);
    return (
      <>
        <Grid
          container
          direction="row"
          justify="center"
          className={style.PhotosContainer}
        >
          {this.props.posts && this.props.posts.length > 0
            ? this.props.posts.map(post => {
                return (
                  <Grid
                    item
                    key={post.Id}
                    xs={10}
                    sm={8}
                    md={6}
                    lg={4}
                    xl={4}
                    className={style.postImage}
                  >
                    <button
                      style={{
                        backgroundImage: `url(${post.ThumbnailPhoto})`
                      }}
                      onClick={() => this.setOpenModal(post)}
                    />
                  </Grid>
                );
              })
            : null}
        </Grid>
        <PostModal
          open={openModal}
          changeModal={this.setOpenModal}
          post={currentPost}
          user={this.props.user}
        />
      </>
    );
  }
}
const mapState = state => ({
  authToken: state.authToken,
  posts: state.posts,
  user: state.user
});
const mapDispatch = dispatch => ({
  getPostsFromAPI: authToken => dispatch(getPostsFromAPI(authToken))
});
export default connect(
  mapState,
  mapDispatch
)(PostPhoto);
