import {useState, createContext, useEffect} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem("cart")) || []);

    const addToCart = (product, quantity) => {
        //props.history.push(`/cart/${props.match.params.id}?qty=${quantity}`)
        const cartProduct = {
            ...product,
            quantity: Number(quantity)
        };

        const productExistsInCart = cart.some(product => product.productID == cartProduct.productID);
        
        if (productExistsInCart) {
            const updatedCart = cart.map((product) => {
                if (product.productID === cartProduct.productID) {
                    return {...product, quantity : product.quantity + cartProduct.quantity}
                } else{
                    return product;
                }
            })
            setCart(updatedCart);
        } else{
            setCart(previousCart => [...previousCart, cartProduct]);
        }
    };

    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return ( 
        <CartContext.Provider value={[cart, setCart, addToCart]}>
            {props.children}
        </CartContext.Provider>
    )
}