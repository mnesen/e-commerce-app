import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

// Material UI
import { Container, IconButton, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
// import styles
import useStyles from './CartStyles';


const Cart = (props) => {

    const [cart, setCart] = useContext(CartContext);
    const classes = useStyles();
    const history = useHistory();

    const handleRemoveProduct = (productID) => {

        const updatedCart = cart.filter(product => product.productID !== productID);
        console.log(updatedCart);
        setCart(updatedCart);
    }

    const getCartTotal = (cart) => {
        const total = cart.reduce((total, currentProduct) => total + (currentProduct.price * currentProduct.quantity), 0)
        return total.toFixed(2);
    }

    return (
        <Container>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead style={{ fontWeight: 'bold' }}>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>
                                <Typography className={classes.tableHeaderText}>Product</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography className={classes.tableHeaderText}>Price</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography className={classes.tableHeaderText}>Quantity</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography className={classes.tableHeaderText}>Total</Typography>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((product) => (
                            <TableRow key={product.productID}>
                                <TableCell component="th" scope="row">
                                    <img
                                        src={product.imgURL}
                                        className={classes.productImg}
                                        onClick={() => { history.push(`product/${product.productID}`) }}
                                        alt="Product"
                                    />
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>${product.price}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>${(product.price * product.quantity).toFixed(2)}</TableCell>
                                <TableCell>
                                    <IconButton className={classes.deleteButton} onClick={() => { handleRemoveProduct(product.productID) }} >
                                        <DeleteIcon></DeleteIcon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {cart.length > 0 &&
                <Typography className={classes.cartTotal} color="primary" align="right">
                    Cart Total : ${getCartTotal(cart)}
                </Typography>
            }
        </Container>
    )
}



export default Cart;