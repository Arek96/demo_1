import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.emptySessionStorage = this.emptySessionStorage.bind(this);
  }
  emptySessionStorage() {
    sessionStorage.removeItem("authToken");
    this.props.resetAuthToken();
  }
  render() {
    return (
      <MenuItem onClick={this.emptySessionStorage}>
        <Link to="/">Log Out</Link>
      </MenuItem>
    );
  }
}
export default LogOut;
