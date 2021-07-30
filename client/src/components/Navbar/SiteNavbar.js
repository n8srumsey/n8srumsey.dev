import React from "react";
import { Typography, AppBar, Toolbar,  } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import useStyles from "./styles";
import './Navbar.css'

const SiteNavbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.Navbar}>
      <div className={classes.Left}> 
        <Typography> n8srumsey.dev </Typography> 
      </div>
      <div className={classes.Right}>
        <a href='/' className={classes.NavbarLink}> Home </a>
        <a href='/projects/' className={classes.NavbarLink}> Projects</a>
        <a href='/resume/' className={classes.NavbarLink}> Resume</a>
        <a href='/blog/' className={classes.NavbarLink}> Blog </a>
        <a href='https://github.com/n8srumsey' className={classes.NavbarLink}> <GitHubIcon /> </a>
        <a href='https://www.linkedin.com/in/nathan-rumsey-66ab1320a/' className={classes.NavbarLink}> <LinkedInIcon /> </a>
      </div>
    </div>
  );
};
export default SiteNavbar;
