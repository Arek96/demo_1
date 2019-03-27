import React, { Component } from 'react';
import style from "../NewPost/NewPost.module.scss";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const styles = theme => ({
    FormControl: {
        width: 500
    },
    UploadButton: {
        marginTop: 20,
        backgroundColor: '#3F51B5',
        color: 'white',
        padding: '10px 10px'

    },
    // UploadButton: hover {

    //     color:
    // }
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
                <form className={style.Form} onSubmit={this.handleSubmit}>
                    <TextField
                        label="Title"
                        className={classes.FormControl}
                        value={title}
                        onChange={this.handleTitleChange}
                        margin="normal"
                        variant="outlined"
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
                        <Button variant="raised" component="span" className={classes.UploadButton} >
                            Upload a photo
                        </Button>
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}
export default withStyles(styles)(NewPost)
