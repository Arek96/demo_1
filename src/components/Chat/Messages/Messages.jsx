import React, { Component } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  CardHeader,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
import { connect } from "react-redux";
import { getMessagesFromRoom } from "../../../actions/chatActions";
import img from "../../../img/withoutPhoto.PNG";
import MessageInput from "./MessageInput/MessageInput";

class Messages extends Component {
  constructor(props) {
    super(props);
  }
  getAvatar = element => {
    let avatarURL = element.sender.avatarURL;

    if (avatarURL) {
      return avatarURL;
    } else {
      return img;
    }
  };
  getUserFromMessage = element => {
    return element.room.users.filter(elem => elem.id !== this.props.user.Id)[0];
  };
  componentDidMount = () => {
    this.fetchMessagesFromRoom();
  };
  fetchMessagesFromRoom = async () => {
    const { chatkitCurrentUser, currentRoom } = this.props;
    try {
      const oldMessages = await chatkitCurrentUser.fetchMultipartMessages({
        roomId: currentRoom.id,
        direction: "older",
        limit: 50
      });
      this.props.getMessagesFromRoom(oldMessages);
    } catch (e) {}
  };

  render() {
    const { messages, currentRoom } = this.props;
    return (
      <>
        {messages && currentRoom ? (
          <List>
            {messages
              .filter(element => element.roomId === currentRoom.id)
              .map(message => (
                <ListItem key={message.id}>
                  {console.log(message)}
                  <ListItemAvatar>
                    <Avatar src={this.getAvatar(message)} />
                  </ListItemAvatar>
                  <ListItemText>{message.sender.name}</ListItemText>
                  <ListItemText>{message.text}</ListItemText>
                </ListItem>
              ))}
          </List>
        ) : null}
        <MessageInput />
      </>
    );
  }
}
const mapProps = state => ({
  chatkitCurrentUser: state.chatkitCurrentUser,
  currentRoom: state.currentRoom,
  messages: state.messages,
  user: state.user
});
const mapDispatch = dispatch => ({
  getMessagesFromRoom: messages => dispatch(getMessagesFromRoom(messages))
});
export default connect(
  mapProps,
  mapDispatch
)(Messages);
