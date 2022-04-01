import '../styles/Shop.css';
import { Link } from "react-router-dom";
import products from '../helpers/products';

const Shop = () => {
  const enabledButton = (<button type='button' className='Button PrimaryButton'>Add to cart</button>);
  const disabledButton = (<button type='button' className='Button PrimaryButton' disabled>Add to cart</button>);
  
  return (
    <section className="Shop">
      <h2 className='ShopHeading'>Shop Espresso Tools</h2>
      <div className='ProductGrid'>
        {products.map((product) =>
          <article key={product.id} className='ShopProduct'>
            <Link to={product.name}>
              <img src={product.img} alt={`${product.vendor} - ${product.name}`} className='ShopImg' />
            </Link>

            <div>
              <small className='ShopVendor'>{product.vendor}</small>
              <h3 className='ProductName'>
                <Link to={product.name}>{product.name}</Link>
              </h3>
              <strong className='ShopPrice'>{product.price}</strong>
            </div>

            {(product.inStock()) ? enabledButton : disabledButton}
          </article>
        )}
      </div>
    </section>
  );
};

export default Shop;
