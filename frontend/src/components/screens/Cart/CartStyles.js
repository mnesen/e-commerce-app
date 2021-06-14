import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        marginTop: theme.spacing(8),
    },
    tableHeaderText: {
        fontSize: '14px',
        fontWeight: 'bold'
    },
    productImg: {
        width: '50px',
        height: '50px',
        borderRadius: '4px',
        "&:hover": {
            cursor: 'pointer',
        }

    },
    cartTotal: {
        fontSize: '18px',
    },
    deleteButton: {
        "&:hover": {
            color: theme.palette.secondary.main,
        }
    }
}));

export default useStyles;
