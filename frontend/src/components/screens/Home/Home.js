import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

//Material UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import ProductGallery from '../../ProductGallery/ProductGallery'
import Footer from '../../Footer/Footer';
import useStyles from '../Home/HomeStyles'

const Home = () => {

    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {

        async function getFeaturedProducts() {
            const response = await Axios.get('http://localhost:5000/random-products');
            setFeaturedProducts(response.data);
        }

        getFeaturedProducts();

    }, []);

    const classes = useStyles();
    const history = useHistory();

    return (
        <div className='home'>
            <div className={classes.heroContent}>
                <Container className={classes.container} maxWidth="md">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Ecommerce Shop
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Small online shop I built using MySQL, Express, React and Node.
                        Browse through the collection of products, search, filter, add products to the cart and more! Have a look around!
                    </Typography>

                    {/* <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"/>
                    <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"/>
                    <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"/>
                    <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"/> */}

                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={() => { history.push('/products') }}>
                                    Go to Products
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <ProductGallery products={featuredProducts} />
                </Container>

            </div>
            <Footer />
        </div>
    )
}

export default Home;