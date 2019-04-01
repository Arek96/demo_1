import React from "react";
import { Component } from "react";
import { Drawer } from "@material-ui/core/";
import { MenuItem, MenuList } from "@material-ui/core";
import { Link } from "react-router-dom";
import style from "./SlideMenu.module.scss";
import LogOut from "./LogOut/LogOut";

class SlideMenu extends Component {
  render() {
    const publicDrawerItems = (
      <React.Fragment>
        <MenuItem>
          <Link to="/login">Log in</Link>
        </MenuItem>
      </React.Fragment>
    );
    const privateDrawerItems =
      sessionStorage.getItem("authToken") !== null ? (
        <React.Fragment>
          <LogOut resetAuthToken={this.props.resetAuthToken} />
          <MenuItem>
            <Link to="/newPost">Add a post</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/myPosts">My posts</Link>
          </MenuItem>
        </React.Fragment>
      ) : (
        publicDrawerItems
      );
    return (
      <Drawer open={this.props.open} onClose={this.props.handleClickMenu}>
        <div
          className={style.DrawerDiv}
          tabIndex={0}
          role="button"
          onClick={this.handleClickMenu}
          onKeyDown={this.handleClickMenu}
        >
          <MenuList className={style.MenuList}>{privateDrawerItems}</MenuList>
        </div>
      </Drawer>
    );
  }
}
export default SlideMenu;
