import '../styles/Shop.css';
import { Link } from "react-router-dom";
import products from '../helpers/products';

const Shop = () => {
  return (
    <section className="Shop">
      <h2 className='ShopHeading'>Shop Espresso Tools</h2>
      <div className='ProductGrid'>
        {products.map((product) =>
          <article key={product.id} className='Product'>
            <Link to={product.name}>
              <img src={product.img} alt={`${product.vendor} - ${product.name}`} className='ShopImg' />
            </Link>
            <div className='ProductOverview'>
              <small className='ShopVendor'>{product.vendor}</small>
              <h3 className='ProductName'>
                <Link to={product.name}>{product.name}</Link>
              </h3>
              <strong className='ShopPrice'>{product.price}</strong>
            </div>
            <button className='Button CartButton'>Add to cart</button>
          </article>
        )}
      </div>
    </section>
  );
};

export default Shop;
