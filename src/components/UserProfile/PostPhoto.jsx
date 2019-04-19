import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import style from "../UserProfile/UserProfile.module.scss";
import PostModal from "../PostModal/PostModal";
import { connect } from "react-redux";
import { getPostsFromAPI } from "../../actions/postActions";
let arrayPost = [];
let post = {
    id: 0
};
for (let i = 0; i < 30; i++) {
    let clone = {
        ...post,
        id: post.id++
    };
    arrayPost.push(clone);
}

class PostPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,

        }
    }
    setOpenModal = () => {
        // this.setState(prevState => ({
        //     openModal: !prevState.openModal
        // }))
    }
    // const [currentPhoto, setCurrentPhoto] = useState("");
    // handlePhotoPost = image => {
    //     setOpenModal(!openModal);
    //     // setCurrentPhoto(image);
    // };
    // componentDidMount() {
    //     this.props.getPostsFromAPI();
    // }
    render() {
        const { openModal } = this.state
        return (
            <>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    className={style.PhotosContainer}
                >
                    {arrayPost.map(element => (
                        <Grid
                            item
                            key={"gallery" + element.id}
                            xs={10}
                            sm={8}
                            md={6}
                            lg={4}
                            xl={4}
                            className={style.postImage}
                        >
                            <button
                                // onClick={() =>
                                //     handlePhotoPost(
                                //         `https://picsum.photos/200/300/?${element.id}`
                                //     )
                                // }
                                style={{
                                    backgroundImage: `url("https://picsum.photos/200/300/?${
                                        element.id
                                        }")`
                                }}
                            />
                        </Grid>
                    ))}
                    {/* {this.props.posts.map(post => (
                        <Grid
                            item
                            key={"gallery" + post.id}
                            xs={10}
                            sm={8}
                            md={6}
                            lg={4}
                            xl={4}
                            className={style.postImage}
                        >
                            <button
                                // onClick={() =>
                                //     handlePhotoPost(
                                //         `https://picsum.photos/200/300/?${post.id}`
                                //     )
                                // }
                                style={{
                                    backgroundImage: `url(${post.Photo})`
                                }}
                            />
                        </Grid>
                    ))} */}
                </Grid>
                <PostModal
                    open={openModal}
                // handlePhotoPost={handlePhotoPost}
                // image={currentPhoto}
                />
            </>
        );
    }
}

const mapState = state => ({
    posts: state.posts,
    // Photo: state.post.Photo,
})
const mapDispatch = dispatch => ({
    getPostsFromAPI: () => dispatch(getPostsFromAPI())
});
export default connect(
    mapState,
    mapDispatch
)(PostPhoto)
