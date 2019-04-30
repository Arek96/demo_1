import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewPost from "./components/NewPost/NewPost";
import PostLists from "./components/PostLists/PostLists";
import Header from "./components/Header/Header";
import style from "./App.module.scss";
import LoginPage from "./components/LoginPage/LoginPage";
import Grid from "@material-ui/core/Grid/Grid";
import UserProfile from "./components/UserProfile/UserProfileContainer";

import NotLogged from "./components/NotLogged/NotLogged";
import { connect } from "react-redux";
import { fetchUser } from "./actions/userActions";
import RemoveProfile from "./components/UserProfile/RemoveProfile/RemoveProfile";
import Home from "./components/Home/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (this.props.authToken) {
      this.props.fetchUser(this.props.authToken);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.authToken !== this.props.authToken && this.props.authToken) {
      this.props.fetchUser(this.props.authToken);
    }
  }

  render() {
    const authRoutes = !this.props.authToken ? (
      <Route path="/" component={NotLogged} />
    ) : (
      <React.Fragment>
        <Route path="/home" component={Home} />
        <Route path="/newPost" component={NewPost} />
        <Route path="/myPosts" component={PostLists} />
        <Route path="/userProfile" component={UserProfile} />
      </React.Fragment>
    );

    return (
      <Router>
        <div className={style.App}>
          <Header user={this.props.user} posts={this.props.posts} />
          <main className={style.Main}>
            <Grid
              container
              justify="center"
              alignContent="center"
              xs={12}
              sm={10}
              md={8}
              lg={7}
              xl={6}
            >
              <section className={style.Section}>
                <Switch>
                  <Route
                    path="/login"
                    render={props => <LoginPage {...props} />}
                  />
                  {authRoutes}
                </Switch>
              </section>
            </Grid>
          </main>

          <footer className={style.Footer}>
            Copyright &copy; 2019 Delfinagram
          </footer>
        </div>
      </Router>
    );
  }
}
const mapDispatch = dispatch => {
  return {
    fetchUser: authToken => dispatch(fetchUser(authToken))
  };
};
const mapProps = state => ({
  authToken: state.authToken,
  user: state.user,
  posts: state.posts
});

export default connect(
  mapProps,
  mapDispatch
)(App);
