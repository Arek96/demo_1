import React, { Component } from "react";
// import "./App.module.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NewPost from "./components/NewPost/NewPost";
import PostLists from "./components/PostLists/PostLists";
import Header from "./components/Header/Header";
import style from "./App.module.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: undefined
    };
    this.passAuthToken = this.getAuthToken.bind(this);
  }
  getAuthToken(authToken) {
    this.setState({
      authToken: authToken
    });
  }
  render() {
    return (
      <Router>
        <div className={style.App}>
          <header>
            <Header />
          </header>
          <main className={style.DataContainer}>
            <section>
              <Route path="/newPost/" component={NewPost} />
              <Route path="/myPosts/" component={PostLists} />
            </section>
          </main>

          <footer>Copyright &copy; 2019 Delfinagram</footer>
        </div>
      </Router>
    );
  }
}

export default App;
