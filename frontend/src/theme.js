import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5a31f4'
        }, 
        default: {
            light: '#ffffff'
        }
    },
    typography: {
        fontFamily: "'Quicksand', sans-serif"
    }
});

export default theme;