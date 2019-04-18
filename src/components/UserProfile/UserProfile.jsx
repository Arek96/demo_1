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

class UserProfile extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      modalEditPageisOpen: false,
      modalDeletePageisOpen: false
    };
  }
  handleEditButton = () => {
    this.setState(prevState => ({
      modalEditPageisOpen: !prevState.modalEditPageisOpen
    }));
  };
  handleRemoveButton = () => {
    this.setState(prevState => ({
      modalDeletetPageisOpen: !prevState.modalDeletePageisOpen
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
            {`${this.props.user.GivenName}  ${this.props.user.Name}`}
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
              {/* <Avatar
                alt="Profile photo"
                src={this.props.user.Photo}
                className={classes.avatar}
              /> */}
              {this.props.user.photo ? (
                <Avatar
                  alt={`${this.props.user.GivenName}${this.props.user.Name}`}
                  src={this.props.user.Photo}
                  className={classes.avatar}
                />
              ) : (
                <Avatar className={classes.avatar}>{`${
                  this.props.user.GivenName
                }${this.props.user.Name}`}</Avatar>
              )}
              <CardContent className={style.BioContainer}>
                <div className={style.ButtonContainer}>
                  {checkUser()}
                  <Button
                    variant="contained"
                    className={classes.edit}
                    onClick={this.handleEditButton}
                  >
                    Edit profile
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.edit}
                    onClick={this.handleRemoveButton}
                  >
                    Remove profile
                  </Button>
                </div>
                <Typography
                  variant="headline"
                  style={{ fontSize: "0.7rem" }}
                  className={classes.typography}
                >
                  Posts: <strong>0</strong>
                </Typography>
                <Typography className={classes.typography}>Biogram</Typography>
              </CardContent>
            </Card>
          </Grid>
          <EditProfile open={this.state.modalEditPageisOpen} />
          <RemoveProfile open={this.state.modalEditPageisOpen} />
          <PostPhoto />
        </Grid>
      </>
    );
  }
}
export default withStyles(styles)(UserProfile);
