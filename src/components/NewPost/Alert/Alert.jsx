// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

// const styles = theme => ({
//   typography: {
//     margin: theme.spacing.unit * 2
//   }
// });
// class Alert extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       anchorEl: null
//     };
//   }
//   handleClose = () => {
//     this.setState({
//       anchorEl: null
//     });
//   };
//   componentDidUpdate = prevProps => {
//     if (this.props.open !== prevProps.open) {
//       this.setState({
//         anchorEl: this.props.open
//       });
//     }
//   };
//   render() {
//     const open = Boolean(this.state.anchorEl);
//     return (
//       <div>
//         <Dialog
//           open={open}
//           onClose={this.handleClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogContent>
//             <DialogContentText
//               style={{
//                 color: "black",
//                 fontFamily: "roboto",
//                 fontSize: "1.2rem",
//                 textAlign: "center"
//               }}
//             >
//               Please fill in all informations about a post !
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={this.handleClose} color="primary" autoFocus>
//               Cancel
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     );
//   }
// }
// export default withStyles(styles)(Alert);
