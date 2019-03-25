import React, { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <section>
        <Route
          path="/login"
          render={props => (
            <LoginPage {...props} passAuthToken={this.getAuthToken} />
          )}
        />
      </section>
    );
  }
}

export default App;
