import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import CardContent from "@material-ui/core/CardContent";
import { Grid, Typography, withStyles } from "@material-ui/core";
import style from "../UserProfile/UserProfile.module.scss";
import styles from "../UserProfile/UserProfile.styles";
import PostPhoto from "./PostPhoto";
import EditProfile from "./EditProfile/EditProfile";
import RemoveProfile from "./RemoveProfile/RemoveProfile";
import img from "../../img/withoutPhoto.PNG";
import { connect } from "react-redux";
import { fetchFriendToApi, getFriendsFromAPI } from "../../actions/friendActions";
import FriendsList from "./FriendsList/FriendsList";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEditPageisOpen: false,
      modalDeletePageisOpen: false,
      modalFriendsList: false
    };
  }
  componentDidMount = () => {
    this.props.getFriendsFromAPI(this.props.authToken)
  }
  handleEditDialog = () => {
    this.setState(prevState => ({
      modalEditPageisOpen: !prevState.modalEditPageisOpen
    }));
  };
  handleDeleteDialog = () => {
    this.setState(prevState => ({
      modalDeletePageisOpen: !prevState.modalDeletePageisOpen
    }));
  };

  handleOpenFriendsList = () => {
    this.setState(prevState => ({
      modalFriendsList: !prevState.modalFriendsList
    }));
  };

  render() {
    const { classes, allFriends, user, posts } = this.props;
    const checkUser = () => {
      if (this.props.user) {
        return (
          <Typography
            variant="headline"
            align="justify"
            style={{ paddingTop: "10px" }}
            className={classNames(classes.typography, classes.loginControl)}
          >
            {user.GivenName && user.Name
              ? `${user.GivenName}  ${user.Name}`
              : `Please edit your profile`}
          </Typography>
        );
      } else return null;
    };
    return (
      <>
        <Grid container direction="column" className={classes.wrap}>
          <Grid item>
            <Card className={style.ProfileContainer}>
              {user.Photo ? (
                <Avatar
                  alt={`${user.GivenName}${user.Name}`}
                  src={user.Photo}
                  className={classes.avatar}
                />
              ) : (
                  <Avatar
                    alt={`${user.GivenName}${user.Name}`}
                    src={img}
                    className={classes.avatar}
                  />
                )}
              <CardContent className={style.BioContainer}>
                <div className={style.ButtonContainer}>
                  {checkUser()}
                  <Button
                    variant="contained"
                    className={classes.edit}
                    onClick={this.handleEditDialog}
                  >
                    Edit profile
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.delete}
                    onClick={this.handleDeleteDialog}
                  >
                    Delete profile
                  </Button>
                </div>
                <Typography
                  variant="headline"
                  style={{ fontSize: "0.7rem" }}
                  className={classes.typography}
                >
                  {posts && posts.length > 0
                    ? `Posts: ${posts.length}`
                    : "Posts: 0"}
                </Typography>
                <button
                  className={style.TransparentButton}
                  onClick={this.handleOpenFriendsList}
                >
                  <Typography
                    variant="headline"
                    style={{ fontSize: "0.7rem" }}
                    className={classes.typography}
                  >
                    {allFriends && allFriends.length > 0
                      ? `Friends: ${allFriends.length}`
                      : "Friends: 0"}
                  </Typography>
                </button>
              </CardContent>
            </Card>
          </Grid>
          <FriendsList
            open={this.state.modalFriendsList}
            handleOpenFriendsList={this.handleOpenFriendsList}
          />
          <EditProfile
            open={this.state.modalEditPageisOpen}
            handleEditDialog={this.handleEditDialog}
          />
          <RemoveProfile
            open={this.state.modalDeletePageisOpen}
            handleDeleteDialog={this.handleDeleteDialog}
          />
          <PostPhoto />
        </Grid>
      </>
    );
  }
}
const mapDispatch = dispatch => ({
  fetchFriendToApi: (authToken, friendID) =>
    dispatch(fetchFriendToApi(authToken, friendID)),
  getFriendsFromAPI: authToken => dispatch(getFriendsFromAPI(authToken)),
});
const mapState = state => ({
  authToken: state.authToken,
  posts: state.allPosts,
  allFriends: state.allFriends
});
export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(UserProfile));
