import React, { Component } from 'react';

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
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                    <input
                            type="text" value={this.state.post.title}
                            onChange={this.handleTitleChange}
                        />
                    </label>
                    <label> Text:
                        <textarea
                            value={this.state.post.text}
                            onChange={this.handleTextChange}
                        />

                    </label>
                    <label>
                        Photo:
                        <input type="file" onChange={this.handlePhotoChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}
export default NewPost;