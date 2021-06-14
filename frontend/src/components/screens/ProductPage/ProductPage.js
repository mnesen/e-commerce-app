import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
// Material UI
import { Box, Button, Container, Divider, Grid, Typography, Select, InputLabel } from '@material-ui/core';

import { CartContext } from '../../../context/CartContext';
import useStyles from './ProductPageStyles';


const ProductPage = (props) => {

    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const [, , addToCart] = useContext(CartContext);


    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        async function getProduct() {
            const response = await Axios.get(`http://localhost:5000/product/${props.match.params.id}`);
            setProduct(response.data[0]);
        }
        getProduct();
    }, []);

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <Container maxWidth="lg">
            {product ?
                <Grid container className={classes.root} spacing={1}>
                    <Grid item sm={6}>
                        <img src={product.imgURL} className={classes.productImg} alt="product" />
                    </Grid>
                    <Grid item xs sm={6} >
                        <Grid container className={classes.gridContainer} wrap="wrap" direction="column" >
                            <Typography variant="h4" >{product.name}</Typography>
                            <Divider></Divider>
                            <Box mt={2} textAlign="left" >
                                <Typography variant="subtitle1" style={{ height: 'auto' }} >
                                    {product.description}.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur erat ac
                                    dictum consequat. Vivamus imperdiet erat mauris, eget congue augue tincidunt ut.
                                    Donec vulputate justo non orci ultricies, ut aliquet ligula molestie.
                                </Typography>
                                <Typography variant="h5" >${product.price}</Typography>

                                <InputLabel htmlFor="age-native-simple">Quantity</InputLabel>
                                <Select
                                    native
                                    value={quantity}
                                    onChange={handleChange}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </Select>
                            </Box>
                            <Button variant="contained" color="primary" className={classes.button} onClick={() => {
                                addToCart(product, quantity);
                                history.push('/cart');
                            }}>Add to Cart</Button>
                        </Grid>
                    </Grid>
                </Grid>
                : <h1>Product Not Found</h1>}
        </Container>
    )
}

export default ProductPage;