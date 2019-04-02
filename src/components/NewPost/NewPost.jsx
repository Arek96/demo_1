import React, { Component } from "react";
import style from "../NewPost/NewPost.module.scss";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import styles from "./NewPost.styles.js";
import { Grid } from "@material-ui/core";
// import Alert from "./Alert/Alert";
import ResetDialog from "./ResetDialog/ResetDialog";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      post: {
        title: "",
        text: ""
      },
      // elAnchor: null,
      openDialog: false
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("photo", this.state.selectedFile);
    formData.append("post", JSON.stringify(this.state.post));
    fetch("https://delfinkitrainingapi.azurewebsites.net/api/post", {
      method: "POST",
      headers: {
        "X-ZUMO-AUTH": this.props.authToken
      },
      body: formData
    }).then(r => console.log(r));
  }
  handleTitleChange(event) {
    this.setState({
      post: { ...this.state.post, title: event.target.value }
    });
  }
  handleTextChange(event) {
    this.setState({
      post: { ...this.state.post, text: event.target.value }
    });
  }
  handlePhotoChange(event) {
    this.setState({
      selectedFile: event.target.files[0]
    });
  }
  handleDialog = () => {
    this.setState(prevState => ({
      openDialog: !prevState.openDialog
    }));
  };
  handleDataReset = () => {
    this.setState(prevState => ({
      post: {
        title: (prevState.title = ""),
        text: (prevState.text = ""),
        selectedFile: ""
      }
    }));
    this.handleDialog();
  };
  get isSaveEnabled() {
    return (
      this.state.post.title.length > 0 &&
      this.state.post.text.length > 0 &&
      !!this.state.selectedFile
    );
  }
  render() {
    const {
        post: { title, text }
      } = this.state,
      { classes } = this.props;
    return (
      <Grid container xs={10} justify="center" alignContent="center">
        <Card className={classes.card}>
          <form className={style.Form} onSubmit={this.handleSubmit}>
            <CardContent>
              <h2 className={style.FormHeader}>Add a new Post</h2>
              <TextField
                label="Title"
                className={classes.FormControl}
                value={title}
                onChange={this.handleTitleChange}
                margin="normal"
                variant="outlined"
                placeholder="Write a title..."
              />

              <TextField
                label="Text"
                className={classes.FormControl}
                value={text}
                multiline
                rows="8"
                onChange={this.handleTextChange}
                margin="normal"
                variant="outlined"
                placeholder="Write an information about post..."
              />

              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={this.handlePhotoChange}
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="contained"
                  color="default"
                  component="span"
                  className={classNames(classes.upload, classes.FormControl)}
                  size="large"
                >
                  Upload
                  <CloudUploadIcon className={classes.rightIcon} />
                </Button>
              </label>
            </CardContent>
            <CardActions className={style.FormResult}>
              <Button
                disabled={!this.isSaveEnabled}
                variant="contained"
                size="large"
                className={classes.save}
              >
                <SaveIcon
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                />
                Save
              </Button>
              <Button
                variant="contained"
                onClick={this.handleDialog}
                size="large"
                className={classes.cancel}
                disabled={!this.isSaveEnabled}
              >
                Reset
              </Button>
            </CardActions>
          </form>
        </Card>
        <ResetDialog
          open={this.state.openDialog}
          handleDialog={this.handleDialog}
          handleDataReset={this.handleDataReset}
        />
      </Grid>
    );
  }
}
export default withStyles(styles)(NewPost);
