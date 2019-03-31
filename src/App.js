import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NewPost from "./components/NewPost/NewPost";
import PostLists from "./components/PostLists/PostLists";
import Header from "./components/Header/Header";
import style from "./App.module.scss";
import LoginPage from "./components/LoginPage/LoginPage";
import Grid from "@material-ui/core/Grid/Grid";

import NotLogged from "./components/NotLogged/NotLogged";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: sessionStorage.getItem("authToken")
    };
    this.getAuthToken = this.getAuthToken.bind(this);
  }
  getAuthToken(authToken) {
    this.setState({
      authToken: authToken
    });
  }

  render() {
    const authRoutes =
      this.state.authToken == null ? (
        <Route path="/" component={NotLogged} />
      ) : (
        <React.Fragment>
          <Route path="/newPost" component={NewPost} />
          <Route path="/myPosts" component={PostLists} />
        </React.Fragment>
      );
    return (
      <Router>
        <div className={style.App}>
          <Header />
          <main className={style.Main}>
            <Grid
              container
              justify="center"
              alignContent="center"
              xs={12}
              sm={10}
              md={8}
              lg={6}
              xl={5}
            >
              <section className={style.Section}>
                <Switch>
                  <Route
                    path="/login"
                    render={props => (
                      <LoginPage {...props} passAuthToken={this.getAuthToken} />
                    )}
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

export default App;
