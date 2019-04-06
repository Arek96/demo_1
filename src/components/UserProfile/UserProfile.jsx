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
            <>
                <Grid container direction='column'>
                    <Grid item>

                        <Card className={style.ProfileContainer} >
                            <CardContent>
                                <Avatar alt="Profile photo" src="https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg" className={classes.avatar} />
                                <Typography>Login</Typography>
                                <Button
                                    variant="contained"
                                    size="large"
                                    className={classes.edit}
                                >
                                    Edit profile
                        </Button>
                                <Typography>Posts:</Typography>
                                <Typography>Dawid Pasieka</Typography>
                                <Typography>Jebany Debil</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <div style={{ width: '100%', height: 1050, backgroundColor: "gray" }}>Jebac starego w ochapie</div>
                    </Grid>
                </Grid>
            </>
        )
    }
}
export default withStyles(styles)(UserProfile);
