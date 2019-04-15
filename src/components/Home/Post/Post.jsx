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
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar>
              {`${this.props.user.name[0]}${this.props.user.surname[0]}`}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.post.Title}
          subheader={this.props.post.PublishDate}
        />
        <CardMedia
          style={{ height: 100 }}
          image
          src={this.props.post.ThumbnailPhoto}
        />
        <CardContent>
          <Typography component="p">{this.props.post.Text[200]}</Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}
export default Post;
