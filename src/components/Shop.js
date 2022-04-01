import '../styles/Shop.css';
import products from '../helpers/products';

const Shop = () => {
  return (
    <section className="Shop">
      <h2 className='ShopHeading'>Shop Espresso Tools</h2>
      <div className='ProductGrid'>
        {products.map((product) =>
          <article key={product.id} className='Product'>
            <a href=''>
              <img src={product.img} alt={`${product.vendor} - ${product.name}`} className='ProductImg' />
            </a>
            <div className='ProductOverview'>
              <small className='Vendor'>{product.vendor}</small>
              <h3 className='ProductName'>
                <a href=''>{product.name}</a>
              </h3>
              <strong className='Price'>{product.price}</strong>
            </div>
            <button className='Button CartButton'>Add to cart</button>
          </article>
        )}
      </div>
    </section>
  );
};

export default Shop;
