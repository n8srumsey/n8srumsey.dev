import { makeStyles } from "@material-ui/core/styles";
import * as COLORS from '../../constants/colors';

export default makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  container: {
    marginTop: "5em"
  },
  heading: {
    color: COLORS.PRIMARY
  },
  downloadButton: {
    position: 'absolute',
    zIndex: 1,
  }
}));
