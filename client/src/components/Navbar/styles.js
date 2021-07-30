import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  Navbar: {
      backgroundColor: "transparent",
      width: "100%",
      height: "20px",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
  },
  NavbarLeft: {
    flex: "50%"
  },
  NavbarRight: {
    flex: "50%",
  },
  SiteName: {
      color: "red"
  }
}));
