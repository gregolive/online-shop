import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import Footer from './Footer';
import Cart from './Cart';
import CartItem from '../helpers/cartItem';

const App = () => {
  const [cartOpen, setcartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const toggleCart = () => setcartOpen(!cartOpen);

  const updateCart = (product, quantity, open) => {
    const item = cartItems.find((item) => item.product === product);
    if (item) {
      item.updateQuantity(quantity);
    } else {
      const newItem = new CartItem(product, quantity);
      setCartItems(cartItems.concat(newItem));
    }
    setItemCount(itemCount + quantity);
    if (open) { toggleCart() }
  };

  // Get cart info from localStorage on mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('CartItems'));
    const savedCount = parseInt(localStorage.getItem('CartCount'));
    if (savedItems) {
      setCartItems(savedItems);
      setItemCount(savedCount);
    }
  }, []);

  // Save cart to localStorage on cartItems/itemCount update
  useEffect(() => {
    const items = JSON.stringify(cartItems);
    localStorage.setItem('CartItems', items);
    localStorage.setItem('CartCount', itemCount);
  }, [cartItems, itemCount]);

  return (
    <BrowserRouter>
      <Header openCart={toggleCart} itemCount={itemCount} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop updateCart={updateCart} />} />
        <Route path='/shop/:productName' element={<Product updateCart={updateCart} />} />
      </Routes>
      <Footer />
      <Cart open={cartOpen} items={cartItems} itemCount={itemCount} closeCart={toggleCart} updateCart={updateCart} />
    </BrowserRouter>
  );
};

export default App;
