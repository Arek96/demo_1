import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
}

export default App;
