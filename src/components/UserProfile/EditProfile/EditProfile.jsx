import React, { Component } from "react";
import style from "./EditProfile.module.scss";
import styles from "./EditProfile.styles.js";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Grid, Dialog } from "@material-ui/core";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        surname: "",
        biogram: "",
        photo: ""
      },
      modalEditPageisOpen: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleBiogramChange = this.handleBiogramChange.bind(this);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    this.setState({
      user: { ...this.state.user, name: event.target.value }
    });
  }
  handleSurnameChange(event) {
    this.setState({
      user: { ...this.state.user, surname: event.target.value }
    });
  }
  handleBiogramChange(event) {
    this.setState({
      user: { ...this.state.user, biogram: event.target.value }
    });
  }
  handleAvatarChange(event) {
    this.setState({
      user: { ...this.state.user, photo: event.target.files[0] }
    });
  }
  handleDialogEdit = () => {
    this.setState(prevState => ({
      modalEditPageisOpen: !prevState.modalEditPageisOpen
    }));
  };
  handlePhoto = () => {
    const input = document.getElementById("raised-button-file");
    input.click();
  };
  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData();
    if (this.state.user.photo) {
      formData.append("photo", this.state.user.photo);
    }
    formData.append("user", JSON.stringify(this.state.user));
    fetch(`https://delfinkitrainingapi.azurewebsites.net/api/user`, {
      method: "PUT",
      headers: {
        "X-ZUMO-AUTH": this.props.authToken
      },
      body: formData
    }).then(r => console.log(r));
  }
  componentDidUpdate = prevProps => {
    if (this.props.open !== prevProps.open) {
      this.setState({
        modalEditPageisOpen: this.props.open
      });
    }
  };
  render() {
    const { classes } = this.props;
    const { name, surname, biogram, photo, modalEditPageisOpen } = this.state;
    return (
      <Grid container xs={10} justify="center" alignContent="center">
        <Dialog open={modalEditPageisOpen} scroll="body">
          <Card>
            <form className={style.FormEdit} onSubmit={this.handleSubmit}>
              <h2 className={style.FormEditHeader}>Edit a profile</h2>
              <CardContent className={classes.ContentEditProfile}>
                <Avatar
                  alt="Profile photo"
                  src="https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg"
                  className={classes.avatar}
                />
                <div className={style.ButtonsAvatarContainer}>
                  <Button
                    variant="contained"
                    color="default"
                    component="span"
                    className={classes.changePhoto}
                    size="medium"
                    onClick={this.handlePhoto}
                  >
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="raised-button-file"
                      multiple
                      type="file"
                      onChange={this.handleAvatarChange}
                    />
                    Change a photo
                  </Button>
                  {/* </label> */}
                  <Button
                    variant="contained"
                    color="default"
                    component="span"
                    className={classes.changePhoto}
                    size="medium"
                  >
                    Delete a photo
                  </Button>
                </div>
                <TextField
                  label="Name"
                  className={classes.TextWidth}
                  value={name}
                  onChange={this.handleNameChange}
                  margin="normal"
                  variant="outlined"
                  placeholder="Write your name..."
                  required
                />
                <TextField
                  label="Surname"
                  className={classes.TextWidth}
                  value={surname}
                  onChange={this.handleSurnameChange}
                  margin="normal"
                  variant="outlined"
                  placeholder="Write your surname..."
                  required
                />
                <TextField
                  label="Biogram"
                  className={classes.TextWidth}
                  value={biogram}
                  multiline
                  rows="8"
                  onChange={this.handleTextChange}
                  margin="normal"
                  variant="outlined"
                  placeholder="Write an information about yourself..."
                />
              </CardContent>
              <CardActions className={classes.EditActions}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className={classes.buttonAction}
                >
                  <SaveIcon
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Save
                </Button>
                <Button
                  variant="contained"
                  onClick={this.handleDialogEdit}
                  size="large"
                  className={classes.buttonAction}
                >
                  Cancel
                </Button>
              </CardActions>
            </form>
          </Card>
        </Dialog>
      </Grid>
    );
  }
}
export default withStyles(styles)(EditProfile);
