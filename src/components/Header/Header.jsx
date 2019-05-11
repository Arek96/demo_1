import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { Typography } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import style from "./Header.module.scss";
import SlideMenu from "./SlideMenu/SlideMenu";
import { Link } from "react-router-dom";
import img from "../../img/withoutPhoto.PNG";

import { withRouter } from "react-router-dom";
import { searchPost } from "../../actions/postActions";
import { fetchSearchFriend } from "../../actions/friendActions";
import { connect } from "react-redux";
import SearchMenu from "./SearchMenu/SearchMenu";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.down("xs")]: {
      marginRight: 6
    }
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    display: "flex",
    position: "relative",
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
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
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
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      searchValue: "",
      openSearchMenu: false
    };
  }
  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleClickMenu = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  handleCloseSearchMenu = event => {
    this.setState({ openSearchMenu: false });
  };

  handleInputSearch = event => {
    let value = event.target.value;

    if (value.indexOf("@") !== 0) {
      this.props.searchPost(value.toLowerCase());
    }
    this.setState(() => ({
      searchValue: value
    }));
    if (value.indexOf("@") === 0 && value.length >= 2) {
      setTimeout(this.setState({ wantSearchFriend: true }), 1000);
    } else {
      this.setState({ openSearchMenu: false });
    }
  };
  componentDidUpdate = prevProps => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        searchValue: ""
      });
    }

    if (this.state.wantSearchFriend) {
      this.setState({
        wantSearchFriend: false
      });
      this.props.fetchSearchFriend(
        this.state.searchValue.slice(1),
        this.props.authToken
      );
      if (this.props.matchingFriends) {
        this.setState({
          openSearchMenu: true
        });
      }
    }
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        searchValue: ""
      });
    }
  };
  render() {
    const { anchorEl, query } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    let userMessage = this.props.user ? (
      <IconButton
        aria-owns={isMenuOpen ? "material-appbar" : undefined}
        aria-haspopup="true"
        color="inherit"
      >
        <Link to="/userProfile" style={{ textDecoration: "none" }}>
          <div className={style.Hello}>
            <Typography
              style={{
                color: "white",
                paddingRight: 5
              }}
            >
              {this.props.user.GivenName
                ? `Hello, ${this.props.user.GivenName}`
                : "Hello!"}
            </Typography>
            {this.props.user.Photo ? (
              <Avatar
                style={{ height: 35, margin: 10 }}
                alt={`${this.props.user.GivenName}${this.props.user.Name}`}
                src={this.props.user.Photo}
              />
            ) : (
              <Avatar
                style={{ height: 35, margin: 10 }}
                alt={`${this.props.user.GivenName}${this.props.user.Name}`}
                src={img}
              >
                }`}
              </Avatar>
            )}
          </div>
        </Link>
      </IconButton>
    ) : (
      <Link to="login">Log In</Link>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleClickMenu}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/Home" style={{ textDecoration: "none" }}>
              <h1 className={style.Logo}>Delfinagram</h1>
            </Link>
            <div className={classes.grow} />
            {this.props.user ? (
              <>
                <div className={classes.sectionDesktop}>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search post/users..."
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                      }}
                      onChange={this.handleInputSearch}
                      value={this.state.searchValue}
                      aria-owns={
                        this.state.openSearchMenu ? "SearchMenu" : undefined
                      }
                      aria-haspopup="true"
                      inputRef={event => {
                        this.inputRef = event;
                      }}
                    />
                    <SearchMenu
                      className={style.SearchMenu}
                      open={this.state.openSearchMenu}
                      handleCloseSearchMenu={this.handleCloseSearchMenu}
                      inputRef={this.inputRef}
                    />
                  </div>
                  {userMessage}
                </div>
                <div className={classes.sectionMobile}>
                  <SearchIcon />
                </div>
              </>
            ) : null}
          </Toolbar>
        </AppBar>
        <SlideMenu
          open={this.state.open}
          handleClickMenu={this.handleClickMenu}
          resetAuthToken={this.props.resetAuthToken}
        />
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  searchPost: value => dispatch(searchPost(value)),
  fetchSearchFriend: (friendValue, authToken) =>
    dispatch(fetchSearchFriend(friendValue, authToken))
});

const mapStateToProps = state => ({
  authToken: state.authToken,
  user: state.user,
  posts: state.posts,
  matchingFriends: state.matchingFriends
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatch
  )(withStyles(styles)(Header))
);
