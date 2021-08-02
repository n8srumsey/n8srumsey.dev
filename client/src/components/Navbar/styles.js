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
    backgroundColor: COLORS.DP04,
    height: "4rem",
    display: "flex",
    justifyContent: "center",

  },
  Navbar: {
    alignItems: "center",
  },
  NavbarLink: {
    color: COLORS.TEXT_PRIMARY,
    underline: 'hover',
    paddingLeft: "2rem",
    fontWeight: '',
  },
  NavbarIcon: {
    marginTop: '4px'
  },
  mobileMenu: {
    color: COLORS.TEXT_PRIMARY,
    underline: 'hover',
    paddingLeft: "2rem",
    fontWeight: '',
    
  },
  mobileMenuButton: {
    color: COLORS.TEXT_PRIMARY,
  }
}));
