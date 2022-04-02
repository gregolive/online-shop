import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import Footer from './Footer';
import Cart from './Cart';

const App = () => {
  const [cartOpen, setcartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('Cart');
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  useEffect(() => {
    console.log('cartOpen')
  }, [cartOpen]);

  const toggleCart = () => setcartOpen(!cartOpen);

  return (
    <BrowserRouter>
      <Header handleClick={toggleCart} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:productName' element={<Product />} />
      </Routes>
      <Footer />
      <Cart open={cartOpen} items={cartItems} handleClick={toggleCart} />
    </BrowserRouter>
  );
};

export default App;
