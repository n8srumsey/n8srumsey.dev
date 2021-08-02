import { makeStyles, createTheme } from '@material-ui/core/styles';
import * as COLORS from '../../../../constants/colors';

const theme = createTheme({});

export default makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  card: {
    padding: theme.spacing(2),
    backgroundColor: COLORS.DP02,
    borderRadius: 10,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    color: COLORS.TEXT_SECONDARY
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  buttonCancel: {
  },
  formTitle: {
    color: COLORS.TEXT_PRIMARY,
    fontWeight: 600,
  }
}));
