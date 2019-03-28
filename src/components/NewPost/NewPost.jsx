import React, { Component } from 'react';
import style from "../NewPost/NewPost.module.scss";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';


const styles = theme => ({
    FormControl: {
        width: 500,
        // marginBottom: '0.6rem'
    },
    upload: {

        color: "black",
        backgroundColor: '#FFD10D',
        margin: '1.2rem auto 4rem auto'

    },
    save: {

        color: "white",
        backgroundColor: '#3F51B5',
    },
    cancel: {

        color: "white",
        backgroundColor: '#3F51B5',


    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
})

class NewPost extends Component {
    constructor(props) {
        super(props);

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePhotoChange = this.handlePhotoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            post: {
                title: '',
                text: '',
            }
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('photo', this.state.selectedFile);
        formData.append('post', JSON.stringify(this.state.post));
        fetch('https://delfinkitrainingapi.azurewebsites.net/api/post', {
            method: 'POST',
            headers: {
                'X-ZUMO-AUTH': this.props.authToken
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
    render() {
        const { post: { title, text } } = this.state, { classes } = this.props;
        return (
            <>
                <div className={style.FormContainer}>
                    <form className={style.Form} onSubmit={this.handleSubmit}>
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
                            rows='8'
                            onChange={this.handleTextChange}
                            margin="normal"
                            variant="outlined"
                            placeholder="Write an information about post..."
                        />

                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                            onChange={this.handlePhotoChange}
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="default" component="span" className={classNames(classes.upload, classes.FormControl)} size="normal">
                                Upload
                        <CloudUploadIcon className={classes.rightIcon} />
                            </Button>
                        </label>

                        <div className={style.FormResult}>
                            <Button variant="contained" size="large" className={classes.save}>
                                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                                Save
                            </Button>
                            <Button size="large" className={classes.cancel}>
                                Cancel
                            </Button>
                        </div>

                    </form>
                </div>
            </>
        )
    }
}
// NewPost.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
export default withStyles(styles)(NewPost)
