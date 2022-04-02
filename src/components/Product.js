import { useParams } from "react-router-dom";
import '../styles/Product.css';
import { findProduct } from '../helpers/products';
import { useState } from "react";

const Product = ({ updateCart }) => {
  const { productName } = useParams();
  const product = findProduct(productName);

  const quantities = [1, 2, 3, 4, 5];

  const [quantity, setQuantity] = useState(1);

  return (
    <section className="Product">
      <img src={product.img} alt={`${product.vendor} - ${product.name}`} className='ProductImg' />

      <div className='ProductOverview'>
        <div className='VendorInfo'>
          <small>{product.vendor}</small> | <small>{product.id.toUpperCase()}</small>
        </div>

        <h2>{product.name.toUpperCase()}</h2>

        <strong className='Price'>{product.price}</strong>

        {(product.inStock()) ?
          <p className='Stock InStock'>In stock</p> : 
          <p className='Stock OutOfStock'>Out of stock</p>  
        }

        <form className='QuantityForm'>
          <label>Quantity</label>
          <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {quantities.map((value) =>
              <option key={value} value={value}>{value}</option>
            )}
          </select>
          
          {(product.inStock()) ? 
            <div className='ProductButtons'>
              <button type='button' className='Button PrimaryButton' onClick={() => updateCart(product, parseInt(quantity), true)}>Add to cart</button>
              <button type='button' className='Button SecondaryButton'>Buy now</button>
            </div> : 
            <div className='ProductButtons'>
              <button type='button' className='Button PrimaryButton' disabled>Add to cart</button>
              <button type='button' className='Button SecondaryButton' disabled>Buy now</button>
            </div>
          }
        </form>
      </div>
    </section>
  );
};

export default Product;
