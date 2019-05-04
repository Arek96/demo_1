import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, ListItemText, Avatar, CardContent, Dialog, Grid, List, ListItem, ListItemSecondaryAction, ListItemAvatar, Button } from '@material-ui/core';
import { getFriendsFromAPI, deleteFriendFromAPI } from "../../../actions/friendActions";
import { connect } from "react-redux";
import style from '../FriendsList/FriendsList.module.scss';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    removeFriendButton: {
        color: "white",
        backgroundColor: "#E89274"
    }
});
class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    componentDidUpdate = prevProps => {
        if (this.props.open !== prevProps.open) {
            this.setState({
                open: this.props.open
            });
        }
    };

    render() {
        const { open } = this.state;
        const { classes } = this.props;
        return (
            <Grid container xs={10} justify="center" alignContent="center">
                <Dialog
                    open={open} scroll="body"
                    onClose={this.props.handleOpenFriendsList}
                >
                    <Card>
                        <CardContent >
                            <List dense className={classes.root}>{this.props.friends.map(friend => (
                                <ListItem key={friend.id}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`Avatar`}
                                            src={friend.Photo}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText primary={`${friend.Name} ${friend.GivenName}`} />
                                    <ListItemSecondaryAction>
                                        <Button
                                            className={classes.removeFriendButton}
                                            variant="contained"
                                            color="default"
                                            size="small"
                                            // onClick={this.props.handleDeleteFriendButton(friend.Id, this.props.authToken)}
                                        >
                                            Remove friend
                                        </Button>
                                    </ListItemSecondaryAction>
                                </ListItem>

                            ))}
                            </List>
                        </CardContent>
                    </Card>
                </Dialog>
            </Grid>
        );
    }
}
const mapDispatch = dispatch => {
    return {
        getFriendsFromAPI: authToken => dispatch(getFriendsFromAPI(authToken)),
        deleteFriendFromAPI: (friend, authToken) => dispatch(deleteFriendFromAPI(friend, authToken))
    };
};
const mapState = state => ({
    authToken: state.authToken,
    friends: state.friends
});
export default connect(
    mapState,
    mapDispatch
)(withStyles(styles)(FriendsList));
