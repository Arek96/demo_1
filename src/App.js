import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrimarySearchAppBar from "./components/Header/Header";

import NewPost from './components/NewPost/NewPost';
import PostLists from './components/PostLists/PostLists';


class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <header>
            <PrimarySearchAppBar />

          </header>
          <main className="dataContainer">
            <section>
              <Route path="/newPost/" component={NewPost} />
              <Route path="/myPosts/" component={PostLists} />
            </section>
          </main>

          <footer>
            Copyright &copy; 2019   Delfinagram
        </footer>
        </div>
      </Router>
    );
  }
}

export default App;
