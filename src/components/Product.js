import {useParams } from "react-router-dom";
import '../styles/Product.css';
import { findProduct } from '../helpers/products';

const Product = ({ testProduct }) => {
  const { productName } = useParams();
  const product = (typeof testProduct === 'undefined') ? findProduct(productName) : testProduct;

  const inStock = (<p className='Stock InStock'>In stock</p>);
  const outOfStock = (<p className='Stock OutOfStock'>Out of stock</p>);

  const enabledButtons = (
    <>
      <button className='Button PrimaryButton'>Add to cart</button>
      <button className='Button SecondaryButton'>Buy now</button>
    </>
  );

  const disabledButtons = (
    <>
      <button className='Button PrimaryButton' disabled>Add to cart</button>
      <button className='Button SecondaryButton' disabled>Buy now</button>
    </>
  );

  return (
    <section className="Product">
      <img src={product.img} alt={`${product.vendor} - ${product.name}`} className='ProductImg' />

      <div className='ProductOverview'>
        <div className='VendorInfo'>
          <small>{product.vendor}</small> | <small>{product.id.toUpperCase()}</small>
        </div>

        <h2>{product.name}</h2>

        <strong className='Price'>{product.price}</strong>

        {(product.inStock()) ? inStock : outOfStock}

        <div className='ProductButtons'>
        {(product.inStock()) ? enabledButtons : disabledButtons}
        </div>
      </div>
    </section>
  );
};

export default Product;
