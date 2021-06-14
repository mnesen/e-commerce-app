import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 0, 1),
    },
    cardGrid: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(8),
    },
    
  }));

  export default useStyles;