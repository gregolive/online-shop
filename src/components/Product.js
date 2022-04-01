import { useParams } from "react-router-dom";
import '../styles/Product.css';
import { findProduct } from '../helpers/products';

const Product = ({ testProduct }) => {
  const { productName } = useParams();
  const product = (typeof testProduct === 'undefined') ? findProduct(productName) : testProduct;

  const inStock = (<p className='Stock InStock'>In stock</p>);
  const outOfStock = (<p className='Stock OutOfStock'>Out of stock</p>);

  const enabledButtons = (
    <>
      <button type='submit' className='Button PrimaryButton'>Add to cart</button>
      <button type='button' className='Button SecondaryButton'>Buy now</button>
    </>
  );

  const disabledButtons = (
    <>
      <button type='submit' className='Button PrimaryButton' disabled>Add to cart</button>
      <button type='button' className='Button SecondaryButton' disabled>Buy now</button>
    </>
  );

  return (
    <section className="Product">
      <img src={product.img} alt={`${product.vendor} - ${product.name}`} className='ProductImg' />

      <div className='ProductOverview'>
        <div className='VendorInfo'>
          <small>{product.vendor}</small> | <small>{product.id.toUpperCase()}</small>
        </div>

        <h2>{product.name.toUpperCase()}</h2>

        <strong className='Price'>{product.price}</strong>

        {(product.inStock()) ? inStock : outOfStock}

        <form className='QuantityForm'>
          <label htmlFor='Quantity'>Quantity</label>
          <select name='Quantity' id='Quantity'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
          <div className='ProductButtons'>
          {(product.inStock()) ? enabledButtons : disabledButtons}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Product;
