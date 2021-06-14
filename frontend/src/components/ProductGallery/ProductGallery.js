
import React from 'react';
import { useHistory } from 'react-router-dom';
// Material UI
import { Grid, Paper } from '@material-ui/core';

// import styles
import useStyles from './ProductGalleryStyles';

const ProductGallery = ({ products }) => {

    const classes = useStyles();
    const history = useHistory();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={6}>
                    {products.map((product) => (
                        <Grid key={product.productID} item onClick={() => { history.push(`product/${product.productID}`) }}>
                            <Paper className={classes.paper} elevation={8} >
                                <img src={product.imgURL} className={classes.paperImg} alt="product" />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductGallery;