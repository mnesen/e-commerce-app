import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';


const drawerWidth = '100%';
const appBarHeight = '70px';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        minHeight: '100%',
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        height: '100%'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        height: appBarHeight,
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    title: {
        flexGrow: 1,
        margin: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
        },

    },
    menuButton: {
        margin: theme.spacing(1),
    },
    link: {
        color: 'black',
        width: 'auto',
        margin: theme.spacing(2),
        textDecoration: 'none',
        fontSize: '1.25em',
        borderBottom: '2px solid transparent',
        "&:hover": {
            color: '#5a31f4'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    active: {
        //borderBottom: '2px solid #5a31f4',
        color: '#5a31f4',
        textDecoration: 'underline',
        textUnderlinePosition: 'under',
    },
    logo: {
        margin: '0px 20px 0px 0px'
    },
    openMenuIcon: {
        display: 'none',
        float: 'right',
        margin: theme.spacing(2),
        color: theme.palette.primary.main,
        "&:hover": {
            cursor: 'pointer'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    closedMenuIcon: {
        margin: theme.spacing(2),
        color: theme.palette.primary.main,
    },

    linkGrid: {
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },

    loginButtons: {
        marginRight: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    
    mobileMenuButton: {
        margin: 'auto'
    },

    listText: {
        textAlign: 'center'
    }
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);


export {useStyles, StyledBadge};
