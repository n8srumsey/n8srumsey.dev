import { withStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";
import * as COLORS from "../../../../constants/colors";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: COLORS.PRIMARY,
    },
    "& label": {
      color: COLORS.TEXT_SECONDARY,
    },
    "& input": {
      color: COLORS.TEXT_PRIMARY,
    },
    ".MuiInputBase-root": {
      color: COLORS.TEXT_PRIMARY,
    },
    '& textarea': {
      color: COLORS.TEXT_PRIMARY,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: COLORS.PRIMARY,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: COLORS.DP12,
      },
      "&:hover fieldset": {
        borderColor: COLORS.DP24,
      },
      "&.Mui-focused fieldset": {
        borderColor: COLORS.PRIMARY,
      },
    },
  },
})(TextField);

export default CssTextField;
