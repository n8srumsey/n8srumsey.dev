import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
    variant: "h4",
    marginLeft: "3rem",
    [theme.breakpoints.down("md")]: {
      variant: "h6",
      marginRight: "1rem"
    },
    
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      marginRight: "3rem"
    },
    alignItems: "stretch",
  },
  sectionMobile: {
    display: "flex",
    marginRight: "1rem",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    alignItems: "center",
  },
  AppBar: {
    backgroundColor: "transparent",
    height: "4rem",
    display: "flex",
    justifyContent: "center",

  },
  Navbar: {
    alignItems: "center",
  },
  NavbarLink: {
    color: 'inherit',
    underline: 'hover',
    paddingLeft: "2rem",
    fontWeight: '',
  },
  NavbarIcon: {
    marginTop: '4px'
  }
}));
