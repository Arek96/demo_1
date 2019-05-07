import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import PostMenu from "./PostMenu/PostMenu";
import style from "./Post.module.scss";
import img from "../../../img/withoutPhoto.PNG";

const styles = theme => ({
  userAvatar: {
    margin: "10px 70px 10px 20px",
    width: 45,
    height: 45
  }
});

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      anchorEl: null
    };
  }

  publishDate = () => {
    let date = new Date(this.props.post.PublishDate);
    let month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return `${date.getDate()} ${
      month[date.getMonth()]
    }, ${date.getFullYear()} `;
  };
  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };
  handleClickMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };
  renderAvatar = (GivenName, Name, style, Photo) => (
    <>
      <Avatar
        style={style}
        alt={`${this.props.user.GivenName}${this.props.user.Name}`}
        src={Photo}
        className={this.props.classes.userAvatar}
      />
      {this.props.post.Friend ? (
        <Typography>{`${GivenName} ${Name} `}</Typography>
      ) : (
        <Typography>{`${GivenName} ${Name} `} </Typography>
      )}
    </>
  );
  render() {
    const { classes } = this.props;
    const checkPhoto = () =>
      this.props.user
        ? this.props.user.Photo
          ? this.renderAvatar(
              this.props.user.GivenName,
              this.props.user.Name,
              { margin: 10 },
              this.props.user.Photo
            )
          : this.renderAvatar(
              this.props.user.GivenName,
              this.props.user.Name,
              { height: 35, margin: 10 },
              img
            )
        : null;
    return (
      <Card className={style.PostCard}>
        <CardHeader
          avatar={checkPhoto()}
          action={
            <IconButton>
              <MoreVertIcon
                aria-owns={this.state.anchorEl ? "postMenu" : undefined}
                aria-haspopup="true"
                onClick={this.handleClickMenu}
              />
            </IconButton>
          }
          title={this.props.post.Title}
          subheader={this.publishDate()}
        />
        <PostMenu
          anchorEl={this.state.anchorEl}
          handleCloseMenu={this.handleCloseMenu}
          post={this.props.post}
        />
        <CardMedia
          className={style.PostImage}
          image={this.props.post.ThumbnailPhoto}
        />
        <Collapse
          in={this.state.expanded}
          timeout="auto"
          collapsedHeight="50px"
        >
          <CardContent>
            <Typography component="p">
              {this.state.expanded
                ? this.props.post.Text
                : this.props.post.Text.length < 100
                ? this.props.post.Text
                : `${this.props.post.Text.substr(0, 100)}...`}
            </Typography>
          </CardContent>
        </Collapse>

        <CardActions disableActionSpacing className={style.PostActions}>
          {this.props.post.Friend ? null : (
            <i
              style={{ fontSize: "40px", paddingLeft: "10px" }}
              class="fas fa-user-circle"
            />
          )}

          <IconButton
            className={this.state.expanded ? style.ExpandButton : null}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(Post);
