import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrimarySearchAppBar from "./components/Header/Header";
import NewPost from "./components/NewPost/NewPost";
import PostLists from "./components/PostLists/PostLists";
import LoginPage from "./components/LoginPage/LoginPage";
import Grid from "@material-ui/core/Grid/Grid";
import style from "./App.module.scss";

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
        <Route path="/" component={LoginPage} />
      ) : (
        <React.Fragment>
          <Route path="/newPost/" component={NewPost} />
          <Route path="/myPosts/" component={PostLists} />
        </React.Fragment>
      );
    return (
      <Router>
        <div className={style.App}>
          <header>
            <PrimarySearchAppBar />
          </header>

          <main className={style.Main}>
            <Grid xs={12} sm={10} lg={8} justify="center">
              <section>
                {authRoutes}
                <Route
                  path="/login"
                  render={props => (
                    <LoginPage {...props} passAuthToken={this.getAuthToken} />
                  )}
                />
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
