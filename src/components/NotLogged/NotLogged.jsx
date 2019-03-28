import React, { Component } from "react";
import styles from "./NotLogged.module.scss";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotLogged = () => (
  <div className={styles.MainDiv}>
    <Typography variant="h5" className={styles.Message}>
      You are not logged in, to go any further and explore our awesome app{" "}
      <Link to="/login">Logg in</Link>
    </Typography>
  </div>
);
export default NotLogged;
