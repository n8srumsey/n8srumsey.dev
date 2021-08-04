import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Typography, AppBar, Toolbar, withStyles, MenuItem, Menu, IconButton, Link, useTheme } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";


const SiteName = withStyles({
  root: {
    background: "-webkit-linear-gradient(45deg, #4287f5 0%, #0062ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
})(Typography);


const SiteNavbar = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
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
      className={classes.root}
    >
      <MenuItem>
        <Link to='/' component={RouterLink} className={classes.mobileMenu}>About</Link>
      </MenuItem>
      <MenuItem>
        <Link to='/projects/' component={RouterLink} className={classes.mobileMenu}>Projects</Link>
      </MenuItem>
      <MenuItem>  
        <Link to='/resume/' component={RouterLink} className={classes.mobileMenu}>Resume</Link>
      </MenuItem>
      <MenuItem>
        <Link to='/blog/' component={RouterLink} className={classes.mobileMenu}>Blog</Link>
      </MenuItem>
      <MenuItem>  
        <Link href='https://github.com/n8srumsey' className={classes.mobileMenu}><GitHubIcon /></Link>
      </MenuItem>
      <MenuItem>
        <Link href='https://www.linkedin.com/in/nathan-rumsey-66ab1320a/' className={classes.mobileMenu}><LinkedInIcon /></Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
    <AppBar className={classes.AppBar}>
      <Toolbar className={classes.Navbar}>
      <SiteName edge="start" variant="h5" className={classes.title} noWrap >n8srumsey.dev</SiteName> 
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Link to='/' className={classes.NavbarLink} component={RouterLink} variant="h6">About</Link>
          <Link to='/projects/' className={classes.NavbarLink} component={RouterLink} variant="h6">Projects</Link>
          <Link to='/resume/' className={classes.NavbarLink} component={RouterLink} variant="h6">Resume</Link>
          <Link to='/blog/' className={classes.NavbarLink} component={RouterLink} variant="h6">Blog</Link>
          <Link href='https://github.com/n8srumsey' className={`${classes.NavbarLink} ${classes.NavbarIcon}`} variant="h6"><GitHubIcon /></Link>
          <Link href='https://www.linkedin.com/in/nathan-rumsey-66ab1320a/' className={`${classes.NavbarLink} ${classes.NavbarIcon}`} variant="h6"><LinkedInIcon /></Link>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            className={classes.mobileMenuButton}
          >
            <MenuIcon  fontSize="medium" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    {renderMobileMenu}
    </div>
  );
};
export default SiteNavbar;
