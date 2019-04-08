import React from "react";
import { Grid } from "@material-ui/core";
import style from "../UserProfile/UserProfile.module.scss";
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
  return (
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
            className="buttonGallery"
            style={{
              backgroundImage: `url("https://picsum.photos/200/300/?${
                element.id
              }")`
            }}
          />
          {/* <img src={`${element.img}${element.id}`} alt="avatar" /> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default PostPhoto;
