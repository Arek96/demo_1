import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Grid, Typography, withStyles } from "@material-ui/core";
import style from "../UserProfile/UserProfile.module.scss";
import styles from '../UserProfile/UserProfile.styles';


class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid container xs={10} justify="center" alignContent="center">
                <Card className={style.ProfileContainer} >
                    <CardContent>
                        <Avatar alt="Profile photo" src="https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg" className={classes.avatar} />
                        <Typography>Profile</Typography>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.edit}
                        >
                            Edit profile
                        </Button>
                    </CardContent>

                </Card>
            </Grid>
        )
    }
}
export default withStyles(styles)(UserProfile);
