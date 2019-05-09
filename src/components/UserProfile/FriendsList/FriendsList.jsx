import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  ListItemText,
  Avatar,
  CardContent,
  Dialog,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemAvatar,
  Button,
  InputBase,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import {
  getFriendsFromAPI,
  deleteFriendFromAPI,
  searchInFriends
} from "../../../actions/friendActions";
import { connect } from "react-redux";
import style from "../FriendsList/FriendsList.module.scss";

const styles = theme => ({
  List: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto'
  },
  ListItemUser: {
    marginTop: '0.6rem'
  },
  removeFriendButton: {
    color: "white",
    backgroundColor: "#E89274"
  },
  search: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    alignIitems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 3,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    margin: '0 auto',
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
});
class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      query: ''
    };
  }
  componentDidUpdate = prevProps => {
    if (this.props.open !== prevProps.open) {
      this.setState({
        open: this.props.open
      });
    }
  }
  handleInputFriendSearch = event => {
    let value = event.target.value;
    this.props.searchInFriends(value.toLowerCase());
    this.setState({
      query: value
    })
  }
  render() {
    const { open, query } = this.state;
    const { classes, handleOpenFriendsList, authToken } = this.props;
    return (
      <Grid container xs={10} justify="center" alignContent="center">
        <Dialog
          open={open}
          scroll="body"
          onClose={handleOpenFriendsList}
        >
          <Card>
            <CardContent>
              <div className={classes.search}>
                <InputBase
                  placeholder="Find a specific friend..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  onChange={this.handleInputFriendSearch}
                  value={query}
                />
              </div>
              <List dense className={classes.List}>
                {this.props.friends.map(friend => (
                  <ListItem key={friend.Id} className={classes.ListItemUser}>
                    <ListItemAvatar>
                      <Avatar alt={`Avatar`} src={friend.Photo} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${friend.Name} ${friend.GivenName}`}
                    />
                    <ListItemSecondaryAction>
                      <Button
                        className={classes.removeFriendButton}
                        variant="contained"
                        color="default"
                        size="small"
                        onClick={() =>
                          this.props.deleteFriendFromAPI(
                            friend,
                            authToken
                          )

                        }
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
    deleteFriendFromAPI: (friend, authToken) =>
      dispatch(deleteFriendFromAPI(friend, authToken)),
    searchInFriends: value => dispatch(searchInFriends(value)),
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
