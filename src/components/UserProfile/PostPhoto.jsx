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

const PostPhoto = () => {
  const [openModal, setOpenModal] = useState(false);
  const handlePhotoPost = () => {
    setOpenModal(!openModal);
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
              onClick={handlePhotoPost}
              className="buttonGallery"
              style={{
                backgroundImage: `url("https://picsum.photos/200/300/?${
                  element.id
                }")`
              }}
            />
          </Grid>
        ))}
      </Grid>
      <PostModal open={openModal} />
    </>
  );
};

export default PostPhoto;
