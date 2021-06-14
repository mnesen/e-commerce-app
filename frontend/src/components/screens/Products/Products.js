import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
// Material UI
import { TextField, Grid, Typography, Container, InputLabel, MenuItem, Select } from '@material-ui/core';

import Product from '../../Product/Product';
import Footer from '../../Footer/Footer';
import useStyles from './ProductsStyles';

const Products = () => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortMethod, setSortMethod] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const classes = useStyles();

  useEffect(() => {

    const getProducts = async () => {
      const response = await Axios.get('http://localhost:5000/all-products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    }

    getProducts();

  }, []);


  useEffect(() => {

    let updatedProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
    });

    if (sortMethod) {
      if (sortMethod === "ascending") {
        updatedProducts = sortAscending(updatedProducts);
      }

      if (sortMethod === "descending") {
        updatedProducts = sortDescending(updatedProducts);
      }
    }

    setFilteredProducts(updatedProducts);

  }, [searchTerm, sortMethod]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortMethod = (event) => {
    setSortMethod(event.target.value);
  };

  // If compareFunction(a, b) returns a value > than 0, sort b before a.
  // If compareFunction(a, b) returns a value ≤ 0, leave a and b in the same order.
  const sortAscending = (collection) => {
    const sortedProducts = collection.sort((a, b) => a.price - b.price);
    return sortedProducts;
  };

  const sortDescending = (collection) => {
    const sortedProducts = collection.sort((a, b) => b.price - a.price);
    return sortedProducts;
  };

  return (
    <div>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Products
          </Typography>
        </Container>

        <Container maxWidth="md">
          <Grid container >
            <Grid item xs sm={6} align="left" >
              <TextField id="outlined-basic" label="Search Products" variant="outlined" onChange={handleSearch} />
            </Grid>
            <Grid item xs sm={6} align="right" >
              <InputLabel id="Sort" >Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={sortMethod}
                onChange={handleSortMethod}
                label="Sort By"
              >
                <MenuItem value={"ascending"}>Price : Low to High</MenuItem>
                <MenuItem value={"descending"}>Price : High to Low</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Product product={product} key={product.productID} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Products;