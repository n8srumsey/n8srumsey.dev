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
    [theme.breakpoints.down("md")]: {
      variant: "h6",
    },
    marginLeft: "1rem"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    alignItems: "stretch",
    marginRight: "1rem"
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    alignItems: "center",
    marginRight: "1rem"
  },
  AppBar: {
    backgroundColor: "transparent",
    height: "4rem",
    display: "flex",
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
