import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import style from "./ModalCard.module.scss";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  media: {
    height: '0%',
    width: "100%",
    paddingTop: "56.25%",
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
});
class ModalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={style.Card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              DP
            </Avatar>
          }
          title={
            <Typography style={classes.Title} variant='subtitle2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi dolor, ultrices non lectus</Typography>
          }
          subheader={new Date().toLocaleDateString()}
        />
        {/* <CardMedia
          className={classes.media}
          image={this.props.image}
          title="image"
        /> */}
        <div className={style.ContainerToIMG}><div className={style.DivIMG}><img src={this.props.image}></img></div></div>
        <CardContent>
          <Typography style={classes.Text} align='justify' variant='subtitle2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Ullam iusto quaerat et. Adipisci libero voluptatem omnis quod! Recusandae pariatur rem adipisci, ullam reprehenderit, quae non ipsam iste, nostrum odio aliquid.
          </Typography>
        </CardContent>


        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph align='justify' >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quibusdam quo vel accusamus dolor repudiandae illo perferendis temporibus, aspernatur quaerat, nobis nostrum, itaque placeat quam nisi culpa voluptatibus repellendus! Aliquam.
              Ipsam nam minus voluptatum, cupiditate vero quisquam explicabo quidem earum id laborum, velit repellendus sit iusto adipisci aspernatur distinctio incidunt ducimus ipsa soluta quo quod numquam! Quis quos error dignissimos.
              Tempora nisi corporis explicabo repellendus at quibusdam, dignissimos officiis. Eum tempore aut consequuntur! Ea ducimus tempora et excepturi veniam, quis voluptates consectetur odit eius, accusamus minima a similique incidunt dignissimos.
              Quos modi doloribus neque nesciunt, iure totam repellendus quibusdam autem, inventore et repellat illum nisi consectetur quod! Incidunt est eos fugit. Soluta ea sit expedita at esse itaque eaque praesentium?
            </Typography>
          </CardContent>
        </Collapse>
      </Card >
    );
  }
}
export default withStyles(styles)(ModalCard);
