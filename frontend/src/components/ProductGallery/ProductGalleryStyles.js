import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop: theme.spacing(6),
    },
    paper: {
      height: 150,
      width: 150,
    },

    paperImg : {
        width: '150px',
        height: '150px',
        transition: 'transform 0.5s ', /* Animation */
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.1)'
        },
    },
  }));

export default useStyles;