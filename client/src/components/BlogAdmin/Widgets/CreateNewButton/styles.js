import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  createNew: {
      zIndex: 2,
      position: 'fixed',
      bottom: '2vh',
      backgroundColor: '#4287f5',
      color: 'black',
      "&:hover, &.Mui-focusVisible": {
          transition: '0.3s',
          color: 'white',
          backgroundColor: '#4287f5'
      },
      right: '5%',
  }
}));
