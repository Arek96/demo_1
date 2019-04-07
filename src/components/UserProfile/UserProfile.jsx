import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import CardContent from "@material-ui/core/CardContent";
import { Grid, Typography, withStyles } from "@material-ui/core";
import style from "../UserProfile/UserProfile.module.scss";
import styles from '../UserProfile/UserProfile.styles';
import PostPhoto from './PostPhoto'


class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handlePhotoPost = this.handlePhotoPost.bind(this);
    }
    handlePhotoPost() {

    }
    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid container direction='column' className={classes.wrap}>
                    <Grid item
                    >
                        <Card
                            className={style.ProfileContainer}
                        >
                            <Avatar alt="Profile photo" src="https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg" className={classes.avatar} />
                            <CardContent className={style.BioContainer}>
                                <div className={style.ButtonContainer}>
                                    <Typography variant='headline' align='justify' style={{ paddingTop: '10px' }} className={classNames(classes.typography, classes.loginControl)}>dawidpolednik</Typography>
                                    <Button
                                        variant="contained"
                                        className={classes.edit}
                                    >
                                        Edit profile
                                </Button>
                                </div>
                                <Typography variant='headline' style={{ fontSize: '0.7rem', }} className={classes.typography}>Posts: <strong>0</strong></Typography>
                                <Typography className={classes.typography}>Dawid Pasieka</Typography>
                                <Typography className={classes.typography}>Biogram</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container direction='row' justify="center" className={style.PhotosContainer} >
                        <PostPhoto />
                    </Grid>
                </Grid>
            </>
        )
    }
}
export default withStyles(styles)(UserProfile);
