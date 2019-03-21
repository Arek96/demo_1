import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GoogleLoginButton from "./GoogleLoginButton/GoogleLoginButton";
import Grid from "@material-ui/core/Grid";
import style from "./LoginPage.module.scss";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleGoogleResp = this.handleGoogleResp.bind(this);
  }
  handleGoogleResp(response) {
    console.log(response);
  }
  render() {
    return (
      <div className={style.LoginPage}>
        <Grid
          container
          className={style.LoginPage}
          justify="center"
          alignContent="center"
        >
          <Grid item xs={8} sm={6} md={3} xl={2}>
            <Card>
              <Grid
                container
                justify="center"
                direction="column"
                alignItems="center"
              >
                <CardContent>
                  <Typography
                    className="loginPageWelcome"
                    color="textSecondary"
                    variant="p"
                  >
                    Welcome
                  </Typography>
                </CardContent>
                <CardActions>
                  <GoogleLoginButton handleGoogleResp={this.handleGoogleResp} />
                </CardActions>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
