import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// Material Ui
import { Button, Grid, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemText } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Import Styles
import { useStyles, StyledBadge } from './NavbarStyles';

import { CartContext } from '../../context/CartContext';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [cart] = useContext(CartContext);

    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const redirect = (path) => {
        setOpen(false);
        history.push(path);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <div className={classes.root}>
                <AppBar
                    color={theme.palette.default.light}
                    position="fixed"
                >

                    <Toolbar disableGutters style={{ height: 70 }}>
                        <Grid
                            container
                            spacing={0}
                            alignItems="center"
                            justify="center"
                        >
                            <Grid className={classes.linkGrid} item xs>
                                <NavLink exact className={classes.link} activeClassName={classes.active} to="/" >Home</NavLink>
                                <NavLink exact className={classes.link} activeClassName={classes.active} to="/products" >Products</NavLink>
                            </Grid>
                            <Grid item xs >
                                <Typography variant="h6" className={classes.title}>
                                    Shop
                                </Typography>
                            </Grid>
                            <Grid style={{ textAlign: 'Right' }} item xs>

                                <div className={classes.loginButtons}>
                                    {/* <Button className={classes.menuButton} color="primary" href="/login" >Log in</Button>
                                    <Button className={classes.menuButton} variant="contained" color="primary" href="/signup">Sign Up</Button> */}

                                    <NavLink exact to="/cart" >
                                        <IconButton aria-label="cart">
                                            <StyledBadge badgeContent={cart.length} color="secondary">
                                                <ShoppingCartIcon />
                                            </StyledBadge>
                                        </IconButton>
                                    </NavLink>
                                </div>



                                <IconButton
                                    color="primary"
                                    aria-label="open drawer"
                                    onClick={handleDrawerToggle}
                                    edge="start"
                                    //className={clsx(classes.openMenuIcon, open && classes.hide)}
                                    className={classes.openMenuIcon}
                                >
                                    {open ? <CloseIcon /> : <MenuIcon />}
                                </IconButton>

                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{ paper: classes.drawerPaper, }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton className={classes.closedMenuIcon} onClick={handleDrawerToggle}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem onClick={() => redirect('/')} button key={'home'}>
                            <ListItemText className={classes.listText} primary={'Home'} />
                        </ListItem>
                        <ListItem onClick={() => redirect('/products')} button key={'products'}>
                            <ListItemText className={classes.listText} primary={'Products'} />
                        </ListItem>
                        <ListItem></ListItem>
                        {/* <ListItem >
                            <Button className={classes.mobileMenuButton} color="primary" onClick={() => redirect('/login')} >Log in</Button>
                        </ListItem>
                        <ListItem  >
                            <Button className={classes.mobileMenuButton} color="primary" variant="contained" onClick={() => redirect('/signup')}>Sign Up</Button>
                        </ListItem> */}

                        <ListItem>
                            <IconButton className={classes.mobileMenuButton} aria-label="cart" onClick={() => redirect('/cart')} >
                                <StyledBadge badgeContent={cart.length} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        </div>
    );
}

export default Navbar;
