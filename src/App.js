import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PrimarySearchAppBar from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <PrimarySearchAppBar />
          </header>
          <main className="">

            <section>Posty</section>
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
