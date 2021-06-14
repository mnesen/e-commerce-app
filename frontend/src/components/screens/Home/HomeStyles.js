import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        marginTop: '0'
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    container: {
        //marginTop: '5rem',
        height: '100vh'
    }
}));

export default useStyles;