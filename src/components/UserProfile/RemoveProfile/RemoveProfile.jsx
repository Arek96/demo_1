import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRemoveUser } from "../../../actions/userActions";
import style from './RemoveProfile.module.scss';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class RemoveProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleDeleteButton = () => {
    this.props.fetchRemoveUser(this.props.authToken);
  };
  // handleClose = () => {
  //   this.setState(prevState => ({
  //     open: !prevState.open,
  //   }))
  // }
  componentDidUpdate = prevProps => {
    if (this.props.open !== prevProps.open) {
      this.setState({
        open: this.props.open
      });
    }
  };
  render() {
    const { open } = this.state
    return (

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.props.handleDeleteDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Do you really want delete your profile?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            All your data will be disapear!
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleDeleteDialog} color="primary">
            Cancel
            </Button>
          <Button onClick={this.handleDeleteButton} color="primary">
            Delete
            </Button>
        </DialogActions>
      </Dialog>

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
