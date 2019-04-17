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

class UserProfile extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      modalEditPageisOpen: false
    };
  }
  handleEditButton = () => {
    this.setState(prevState => ({
      modalEditPageisOpen: !prevState.modalEditPageisOpen
    }));
  };
  render() {
    const checkUser = () => {
      if (this.props.user) {
        return (
          <Typography variant="headline"
            align="justify"
            style={{ paddingTop: "10px" }}
            className={classNames(
              classes.typography,
              classes.loginControl
            )}>
            {`${this.props.user.name}  ${this.props.user.surname}`}
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
              <Avatar
                alt="Profile photo"
                src={this.props.user.photo}
                className={classes.avatar}
              />
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
          <PostPhoto />
        </Grid>
      </>
    );
  }
}
export default withStyles(styles)(UserProfile);
