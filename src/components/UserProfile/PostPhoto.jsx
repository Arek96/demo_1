import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import style from "../UserProfile/UserProfile.module.scss";
import PostModal from "../PostModal/PostModal";
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

const PostPhoto = props => {
    const [openModal, setOpenModal] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState("");
    const handlePhotoPost = image => {
        setOpenModal(!openModal);
        setCurrentPhoto(image);
    };
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
                            onClick={() =>
                                handlePhotoPost(
                                    `https://picsum.photos/200/300/?${element.id}`
                                )
                            }
                            style={{
                                backgroundImage: `url("https://picsum.photos/200/300/?${
                                    element.id
                                    }")`
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
            <PostModal
                open={openModal}
                handlePhotoPost={handlePhotoPost}
                image={currentPhoto}
            />
        </>
    );
};
export default PostPhoto;
