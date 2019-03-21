import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PrimarySearchAppBar from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <PrimarySearchAppBar />
        </header>
        <section>Posty</section>

        <footer />
      </div>
    );
  }
}

export default App;
