import React, { Component } from "react";
import { TextField, IconButton } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { connect } from "react-redux";
class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  handleSendMessage = () => {
    this.props.chatkitCurrentUser.sendSimpleMessage({
      roomId: this.props.currentRoom.id,
      text: this.state.inputValue
    });
  };
  render() {
    return (
      <div>
        <div>
          <TextField
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="Send message..."
          />
          <IconButton onClick={this.handleSendMessage}>
            <Send />
          </IconButton>
        </div>
      </div>
    );
  }
}
const mapProps = state => ({
  chatkitCurrentUser: state.chatkitCurrentUser,
  currentRoom: state.currentRoom
});
export default connect(mapProps)(MessageInput);
