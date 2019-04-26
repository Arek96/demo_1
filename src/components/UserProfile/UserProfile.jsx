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

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEditPageisOpen: false,
      modalDeletePageisOpen: false
    };
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
  render() {
    const checkUser = () => {
      if (this.props.user) {
        return (
          <Typography
            variant="headline"
            align="justify"
            style={{ paddingTop: "10px" }}
            className={classNames(classes.typography, classes.loginControl)}
          >
            {this.props.user.GivenName && this.props.user.Name ? `${this.props.user.GivenName}  ${this.props.user.Name}` : `Please edit your profile`}
          </Typography>
        );
      } else return null;
    };
    const { classes } = this.props;
    return (
      <>
        <Grid container direction="column" className={classes.wrap}>
          <Grid item>
            <Card className={style.ProfileContainer}>
              {this.props.user.Photo ? (
                <Avatar
                  alt={`${this.props.user.GivenName}${this.props.user.Name}`}
                  src={this.props.user.Photo}
                  className={classes.avatar}
                />
              ) : (
                  <Avatar
                    alt={`${this.props.user.GivenName}${this.props.user.Name}`}
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
                  {this.props.posts.length > 0 ? `Posts: ${this.props.posts.length}` : 'Posts: 0'}
                </Typography>
                <Typography className={classes.typography}>Biogram</Typography>
              </CardContent>
            </Card>
          </Grid>
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
const mapState = state => ({
  posts: state.posts
});
export default connect(mapState)(withStyles(styles)(UserProfile));
