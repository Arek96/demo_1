import React, { Component } from "react";
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
import styles from "./Post.module.scss";
import img from "../../../img/withoutPhoto.PNG";

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
  render() {
    const checkPhoto = () =>
      this.props.user.Photo ? (
        <Avatar
          style={{ margin: 10 }}
          alt={`${this.props.user.GivenName}${this.props.user.Name}`}
          src={this.props.user.Photo}
        />
      ) : (
          <Avatar
            style={{ height: 35, margin: 10 }}
            alt={`${this.props.user.GivenName}${this.props.user.Name}`}
            src={img}
          >
            }`}
        </Avatar>
        )

    return (
      <Card className={styles.PostCard}>
        <CardHeader
          avatar={
            checkPhoto()
          }
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
          className={styles.PostImage}
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

        <CardActions disableActionSpacing className={styles.PostActions}>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton
            className={this.state.expanded ? styles.ExpandButton : null}
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
export default Post;
