import { makeStyles } from "@material-ui/core/styles";
import * as COLORS from "../../constants/colors";

export default makeStyles((theme) => ({
  root: {
    '& .MuiList-root.MuiMenu-list.MuiList-padding': {
      backgroundColor: COLORS.DP08,
    },
    '& .MuiPaper-root': {
      backgroundColor: 'transparent'
    },
    '& .MuiMenuItem-root:hover': {
      backgroundColor: COLORS.DP24,
    }
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
    marginLeft: "3rem",
    [theme.breakpoints.down("md")]: {
      marginRight: "1rem"
    },
    
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      marginRight: "3rem"
    },
    alignItems: "stretch",
  },
  sectionMobile: {
    display: "flex",
    marginRight: "1rem",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    alignItems: "center",
  },
  AppBar: {
    backgroundColor: COLORS.DP04,
    height: "5rem",
    display: "flex",
    justifyContent: "center",

  },
  Navbar: {
    alignItems: "center",
    innerWidth: '100%',
  },
  NavbarLink: {
    color: COLORS.TEXT_PRIMARY,
    padding: 0,
  },
  NavbarIcon: {
    color: COLORS.TEXT_PRIMARY,
  },
  mobileMenu: {
    color: COLORS.TEXT_PRIMARY,
    underline: 'hover',
    paddingLeft: "2rem",
    fontWeight: '',
    
  },
  mobileMenuButton: {
    color: COLORS.TEXT_PRIMARY,
  },
  tabLink: {
    color: COLORS.TEXT_PRIMARY,
  },
  navbarIconDiv: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px'
  }
}));
