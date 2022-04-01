import {useParams } from "react-router-dom";
import '../styles/Product.css';
import { findProduct } from '../helpers/products';

const Product = ({ testProduct }) => {
  const { productName } = useParams();
  const product = (typeof testProduct === 'undefined') ? findProduct(productName) : testProduct;

  return (
    <section className="Product">
      <img src={product.img} alt={`${product.vendor} - ${product.name}`} className='ProductImg' />
      <div className='ProductOverview'>
        <div className='VendorInfo'>
          <small>{product.vendor}</small> | <small>{product.id.toUpperCase()}</small>
        </div>
        <h2>{product.name}</h2>
        <strong className='Price'>{product.price}</strong>
        <div className='ProductButtons'>
          <button className='Button PrimaryButton'>Add to cart</button>
          <button className='Button SecondaryButton'>Buy now</button>
        </div>
      </div>
    </section>
  );
};

export default Product;
