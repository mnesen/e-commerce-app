import React from 'react';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
// Material UI
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
// Import Styles
import useStyles from './ProductStyles';

import { CartContext } from '../../context/CartContext';

const Product = ({ product }) => {

    const [, , addToCart] = useContext(CartContext);
    const history = useHistory();
    const classes = useStyles();

    return (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={product.imgURL}
                    title={product.name}
                    onClick={() => { history.push(`product/${product.productID}`) }}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions} disableSpacing >
                    <Button onClick={() => { addToCart(product, 1) }} size="small" color="primary">
                        Add to Cart
                    </Button>
                    <Typography className={classes.cardPrice}>
                        ${product.price}
                    </Typography>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product;