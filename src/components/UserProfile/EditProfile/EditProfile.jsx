import React, { Component } from 'react';
import style from './EditProfile.module.scss';
import styles from "./EditProfile.styles.js";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Grid, Dialog } from "@material-ui/core";


class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: '',
                surname: '',
                biogram: '',
                photo: '',
            },
            editPageisOpen: false,
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleBiogramChange = this.handleBiogramChange.bind(this);
        this.handleAvatarChange = this.handleAvatarChange.bind(this);
    }
    handleNameChange(event) {
        this.setState({
            user: { ...this.state.user, name: event.target.value }
        })
    }
    handleSurnameChange(event) {
        this.setState({
            user: { ...this.state.user, name: event.target.value }
        })
    }
    handleBiogramChange(event) {
        this.setState({
            user: { ...this.state.user, biogram: event.target.value }
        })
    }
    handleAvatarChange(event) {
        this.setState({
            user: { ...this.state.user, photo: event.target.files[0] }
        })
    }
    componentDidUpdate = prevProps => {
        if (this.props.open !== prevProps.open) {
            this.setState({
                modalEditPageisOpen: this.props.open
            });
        }
    }
    render() {
        const { classes } = this.props;
        const { name, surname, biogram, photo, modalEditPageisOpen } = this.state;
        return (
            <Grid container xs={10} justify="center" alignContent="center">
                <Dialog
                    open={modalEditPageisOpen}
                >
                    <Card className={classes.card}>
                        <form className={style.Form}>
                            <CardContent>
                                <h2 className={style.FormHeader}>Edit your profile informations</h2>
                                <TextField
                                    label="Name"
                                    className={classes.FormControl}
                                    value={name}
                                    // onChange={this.handleTitleChange}
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Write your name..."
                                />
                                <TextField
                                    label="Surname"
                                    className={classes.FormControl}
                                    value={surname}
                                    // onChange={this.handleTitleChange}
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Write your surname..."
                                />

                                <TextField
                                    label="Biogram"
                                    className={classes.FormControl}
                                    value={surname}
                                    multiline
                                    rows="8"
                                    // onChange={this.handleTextChange}
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Write an information about yourself..."
                                />
                                {/* 
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
                            </label> */}
                            </CardContent>
                            <CardActions className={style.FormResult}>
                                <Button
                                    // disabled={!this.isSaveEnabled}
                                    variant="contained"
                                    size="large"
                                    className={classes.save}
                                // onClick={this.handleSubmit}
                                >
                                    <SaveIcon
                                        className={classNames(classes.leftIcon, classes.iconSmall)}
                                    />
                                    Save
              </Button>
                                <Button
                                    variant="contained"
                                    // onClick={this.handleDialog}
                                    size="large"
                                    className={classes.cancel}
                                // disabled={!this.isSaveEnabled}
                                >
                                    Back
                            </Button>
                            </CardActions>
                        </form>
                    </Card>
                </Dialog>
            </Grid>
        )
    }
}
export default withStyles(styles)(EditProfile);