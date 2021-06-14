import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    "Typography": {
        cursor: 'normal'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        transition: 'transform 0.8s ', /* Animation */
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.05)'
        },
    },
    cardContent: {
        flexGrow: 1,
    },
    cardPrice: {
        marginLeft: 'auto'
    },
}));

export default useStyles;