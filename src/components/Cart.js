import { useState, useEffect } from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('Cart');
    if (savedCart) {
      setProducts(savedCart);
    }
  }, []);

  return (
    <div className="CartContainer">
      <div className='Cart'>
        <header className='CartHeader'>
          <h4>Shopping cart</h4>
          <p className='CartCount'>0 items</p>

          <div className='CartProducts'>
            {products.map((product) =>
              <div>
                
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Cart;
