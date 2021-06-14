import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
      marginTop: 'auto',
      bottom: 0,
      width: '100%'
    },
  }));

export default useStyles;
  