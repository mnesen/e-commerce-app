import React from 'react';
//Material UI
import Typography from '@material-ui/core/Typography';
// Import styles
import useStyles from './FooterStyles';


const Copyright = ()=> {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
          Michael Nesen
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Ecommerce site
        </Typography>
            <Copyright />
        </footer>
    )
}

export default Footer;


