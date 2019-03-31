import React from "react";
import { Component } from "react";
import { Drawer } from "@material-ui/core/";
import { MenuItem, MenuList } from "@material-ui/core";
import { Link } from "react-router-dom";
import style from "./SlideMenu.module.scss";
import LogOut from "./LogOut/LogOut";

class SlideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Drawer open={this.props.open} onClose={this.props.handleClickMenu}>
        <div
          className={style.DrawerDiv}
          tabIndex={0}
          role="button"
          onClick={this.handleClickMenu}
          onKeyDown={this.handleClickMenu}
        >
          <MenuList className={style.MenuList}>
            {sessionStorage.getItem("authToken") != null ? (
              <LogOut resetAuthToken={this.props.resetAuthToken} />
            ) : null}
            <MenuItem className={style.MenuItem}>
              <Link to="/newPost">Add a post</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/myPosts">My posts</Link>
            </MenuItem>
          </MenuList>
        </div>
      </Drawer>
    );
  }
}
export default SlideMenu;
