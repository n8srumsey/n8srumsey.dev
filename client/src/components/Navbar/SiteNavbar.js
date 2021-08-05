import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Typography, AppBar, Toolbar, withStyles, MenuItem, Menu, IconButton, Link, useTheme, Tabs, Tab, Grid } from "@material-ui/core";
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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [tabValue, setTabValue] = useState(0)
  const path = useLocation().pathname;

  

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (path.includes('/projects')) {
      setTabValue(1);
    } else if (path.includes('/resume')) {
      setTabValue(2);
    } else if (path.includes('/blog')) {
      setTabValue(3);
    } else {
      setTabValue(0);
    }
  }, [path]);

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
        <Link to='/' className={classes.mobileMenu} component={RouterLink}>About</Link>
      </MenuItem>
      <MenuItem>
        <Link to='/projects' className={classes.mobileMenu} component={RouterLink}>Projects</Link>
      </MenuItem>
      <MenuItem>
        <Link to='/resume' className={classes.mobileMenu} component={RouterLink}>Resume</Link>
      </MenuItem>
      <MenuItem>
        <Link to='/blog' className={classes.mobileMenu} component={RouterLink}>Blog</Link>
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
        <Toolbar className={classes.Navbar} justify='space-between'>
          <div className={`${classes.sectionDesktop} ${classes.grow}`}>
            <Grid container alignItems='center' justifyContent='space-between' direction='row'>
              <Grid item>
                <SiteName variant="h4" className={classes.title} noWrap >n8srumsey.dev</SiteName>
              </Grid>
              <Grid item>
                <Tabs centered={true} value={tabValue}>
                  <Tab label={<Typography>About</Typography>} to='/' className={classes.tabLink} component={RouterLink} index={0}/>
                  <Tab label={<Typography>Projects</Typography>} to='/projects' className={classes.tabLink} component={RouterLink} index={1}/>
                  <Tab label={<Typography>Resume</Typography>} to='/resume' className={classes.tabLink} component={RouterLink} index={2}/>
                  <Tab label={<Typography>Blog</Typography>} to='/blog' className={classes.tabLink} component={RouterLink} index={3}/>
                </Tabs>
              </Grid>
              <Grid item>
                <Link href='https://github.com/n8srumsey' underline='none' className={classes.NavbarLink}>
                  <div className={classes.navbarIconDiv}>
                    <GitHubIcon className={classes.NavbarIcon} />
                    <Typography>&nbsp;&nbsp;n8srumsey</Typography>
                  </div>
                </Link>
                <Link href='https://www.linkedin.com/in/nathan-rumsey-66ab1320a/' underline='none' className={classes.NavbarLink} display='inline'>
                  <div className={classes.navbarIconDiv}>
                    <LinkedInIcon className={classes.NavbarIcon} />
                    <Typography>&nbsp;&nbsp;Nathan Rumsey</Typography>
                  </div>
                </Link>
              </Grid>
            </Grid>
          </div>
          <div className={`${classes.sectionMobile} ${classes.grow}`}>
            <Grid container alignItems='center' justifyContent='space-between' direction='row'>
              <SiteName edge='start' variant="h4" className={classes.title} noWrap >n8srumsey.dev</SiteName>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                className={classes.mobileMenuButton}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};
export default SiteNavbar;
