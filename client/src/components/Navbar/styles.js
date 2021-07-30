import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  Navbar: {
      backgroundColor: "transparent",
      width: "100%",
      height: "45px",
      display: "flex",
      alignItems: "center",
  },
  NavbarLeft: {
    height: "45px",
    flex: "50%",
    display: "flex",
    justifyContent: "left",
  },
  NavbarRight: {
    height: "45px",
    flex: "50%",
    display: "flex",
    justifyContent: "right",
  },
  SiteName: {
      fontSize: "32",
  }
}));
