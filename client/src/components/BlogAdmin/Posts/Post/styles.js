import { makeStyles } from "@material-ui/core/styles";
import * as COLORS from "../../../../constants/colors";

export default makeStyles((theme =>({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px",
    height: "100%",
    position: "relative",
    backgroundColor: COLORS.DP02,
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "14.5px",
    right: "0px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    color: COLORS.TEXT_SECONDARY,
  },
  title: {
    padding: "0 16px",
    color: COLORS.TEXT_PRIMARY
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  description: {
    color: COLORS.TEXT_SECONDARY
  }
})));
