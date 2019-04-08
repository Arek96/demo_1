import React from 'react';
import { Grid } from "@material-ui/core";
import style from "../UserProfile/UserProfile.module.scss";
let arrayPost = [];
let post = {
    id: 0,
    img: 'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg'
}
for (let i = 0; i < 6; i++) {
    arrayPost.push(post);
    post.id++;
    console.log(post.id)

}

const PostPhoto = () => {

    return <Grid container direction='row' justify="center" className={style.PhotosContainer} >
        {arrayPost.map(element => <Grid item key={'gallery' + post.id}
            xs={10}
            sm={8}
            md={6}
            lg={4}
            xl={4}
            className={style.postImage}>
            <img src={element.img} alt="avatar" />
        </Grid>)}
    </Grid>
}

export default PostPhoto;