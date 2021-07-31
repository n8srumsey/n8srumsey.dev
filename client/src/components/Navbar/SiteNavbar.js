import React from "react";
import { Typography, AppBar, Toolbar, withStyles, MenuItem, Menu, IconButton, setMobileMoreAnchorEl } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MenuIcon from "@material-ui/icons/Menu";

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
  const mobileMenuId = 'primary-navbar-menu-mobile';
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <a href='/' className={classes.NavbarLink}>Home</a>
        <a href='/projects/' className={classes.NavbarLink}>Projects</a>
      </MenuItem>
      <MenuItem>  <a href='/resume/' className={classes.NavbarLink}>Resume</a>
        <a href='/blog/' className={classes.NavbarLink}>Blog</a>
      </MenuItem>
      <MenuItem>  
        <a href='https://github.com/n8srumsey' className={classes.NavbarLink}><GitHubIcon /></a>
      </MenuItem>
      <MenuItem>
        <a href='https://www.linkedin.com/in/nathan-rumsey-66ab1320a/' className={classes.NavbarLink}><LinkedInIcon /></a>
      </MenuItem>        
    </Menu>
  );

  return (
    <div>
    <AppBar className={classes.Navbar} xs={12}>
      <Toolbar>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <SiteName variant="h4" className={classes.title}>n8srumsey.dev</SiteName> 
            <a href='/' className={classes.NavbarLink}>Home</a>
            <a href='/projects/' className={classes.NavbarLink}>Projects</a>
            <a href='/resume/' className={classes.NavbarLink}>Resume</a>
            <a href='/blog/' className={classes.NavbarLink}>Blog</a>
            <a href='https://github.com/n8srumsey' className={classes.NavbarLink}><GitHubIcon /></a>
            <a href='https://www.linkedin.com/in/nathan-rumsey-66ab1320a/' className={classes.NavbarLink}><LinkedInIcon /></a>
          </div>
          <div className={classes.sectionMobile}>
            <SiteName style={{fontSize: 8}} className={classes.title}>n8srumsey.dev</SiteName> 
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              style={{fontSize: 8}}
            >
              <MenuIcon />
            </IconButton>
          </div>
      </Toolbar>
    </AppBar>
    {renderMobileMenu}
    </div>
  );
};
export default SiteNavbar;
