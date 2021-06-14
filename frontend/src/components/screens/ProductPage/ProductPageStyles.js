import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '70px',
        height: '100%'
    },
    gridContainer: {
        height: '100%'
    },
    productImg: {
        width: '80%', 
        height: '100%'
    },
    button: {
        marginTop: 'auto',
    },
}));

export default useStyles;

