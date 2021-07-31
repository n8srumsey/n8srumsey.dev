import React from "react";
import { Typography, AppBar, Toolbar, withStyles, Grid } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from "./styles";
import './Navbar.css'

const SiteName = withStyles({
  root: {
    background: "-webkit-linear-gradient(45deg, #4545ff 30%, #8a2be2 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
})(Typography);

const SiteNavbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.Navbar} xs={12}>
      <Toolbar>
          <SiteName variant="h4" className={classes.title}>n8srumsey.dev</SiteName> 
          
          <a href='/' className={classes.NavbarLink}>Home</a>
          <a href='/projects/' className={classes.NavbarLink}>Projects</a>
          <a href='/resume/' className={classes.NavbarLink}>Resume</a>
          <a href='/blog/' className={classes.NavbarLink}>Blog</a>
          <a href='https://github.com/n8srumsey' className={classes.NavbarLink}><GitHubIcon /></a>
          <a href='https://www.linkedin.com/in/nathan-rumsey-66ab1320a/' className={classes.NavbarLink}><LinkedInIcon /></a>
      </Toolbar>
    </AppBar>
  );
};
export default SiteNavbar;
