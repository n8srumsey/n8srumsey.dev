import { makeStyles, createTheme } from '@material-ui/core/styles';
import * as COLORS from '../../../../constants/colors';

const theme = createTheme({});

export default makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiDialog-paperFullScreen': {
      backgroundColor: COLORS.DP24,
    },
    '& .MuiPaper-root': {
      backgroundColor: 'transparent',
      borderRadius: 12
    }
  },
  dialog: {
    padding: theme.spacing(2),
    borderRadius: 25,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: COLORS.DP24,
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    color: COLORS.TEXT_SECONDARY
  },
  formTitle: {
    color: COLORS.TEXT_PRIMARY,
    fontWeight: 600,
  },
  formDialog: {
    backgroundColor: COLORS.DP24
  },
  formContextText: {
    color: COLORS.TEXT_DISABLED
  },
}));
