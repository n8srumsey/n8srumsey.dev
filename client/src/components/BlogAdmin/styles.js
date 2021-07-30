import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flexStart",
    alignItems: "center",
    background: "transparent",
    boxShadow: "none",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  container: {
    backgroundColor: "transparent",
  },
}));
