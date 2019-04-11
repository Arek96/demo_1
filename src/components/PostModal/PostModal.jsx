import React from "react";
// import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ModalCard from "./ModalCard";
import style from "./ModalCard.module.scss";
import Dialog from "@material-ui/core/Dialog";
class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }
  componentDidUpdate = prevProps => {
    if (this.props.open !== prevProps.open) {
      this.setState({
        openDialog: this.props.open
      });
    }
  };
  render() {
    return (
      <Dialog
        // className={style.Modal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        open={this.props.open}
        onClose={this.props.handlePhotoPost}
      >
        <ModalCard />
      </Dialog>
    );
  }
}
export default PostModal;
