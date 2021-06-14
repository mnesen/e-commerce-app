import './App.css';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';


import Navbar from './components/Navbar/Navbar';
import Home from './components/screens/Home/Home';
import Products from './components/screens/Products/Products';
import ProductPage from './components/screens/ProductPage/ProductPage';
import Cart from './components/screens/Cart/Cart';
import { CartProvider } from './context/CartContext';

const App = ()=> {

  return (
    <ThemeProvider theme={theme} >
      <CartProvider>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home} ></Route>
            <Route exact path='/products' component={Products}></Route>
            <Route exact path='/product/:id' component={ProductPage}></Route>
            {/* <Route path="/product/:id" render={(props) => <ProductScreen addToCart={addToCart}  {...props} />} /> */}
            <Route exact path='/cart' component={Cart}></Route>
            {/* <Route path="/cart" render={(props) => <Cart cart={cart} setCart={setCart}  {...props} />} /> */}
          </Switch>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
