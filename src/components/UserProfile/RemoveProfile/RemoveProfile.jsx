import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRemoveUser } from "../../../actions/userActions";

class RemoveProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleDeleteButton = () => {
    this.props.fetchRemoveUser(this.props.authToken);
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleDeleteButton}>Delete profile</button>
      </React.Fragment>
    );
  }
}
const mapDispatch = dispatch => ({
  fetchRemoveUser: authToken => dispatch(fetchRemoveUser(authToken))
});

const mapState = state => ({
  authToken: state.authToken
});
export default connect(
  mapState,
  mapDispatch
)(RemoveProfile);
