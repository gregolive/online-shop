import {useParams } from "react-router-dom";
import '../styles/Product.css';
import { findProduct } from '../helpers/products';

const Product = ({ testProduct }) => {
  const { productName } = useParams();
  const product = (typeof testProduct === 'undefined') ? findProduct(productName) : testProduct;

  return (
    <section className="Product">
      <img src={product.img} alt={`${product.vendor} - ${product.name}`} className='ProductImg' />
      <small>{product.vendor}</small>
      <h2>{product.name}</h2>
      <strong className='ShopPrice'>{product.price}</strong>
      <button className='Button CartButton'>Add to cart</button>
    </section>
  );
};

export default Product;
