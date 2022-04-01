import '../styles/Shop.css';
import products from '../helpers/products';

const Shop = () => {
  return (
    <section className="Shop">
      <h2 className='ShopHeading'>Shop Espresso Tools</h2>
      <div className='ProductGrid'>
        {products.map((product) =>
          <article key={product.id} className='Product'>
            <img src={product.img} alt={`${product.vendor} - ${product.name}`} />
            <small className='Manufacturer'>{product.vendor}</small>
            <h3 className='ProductName'>{product.name}</h3>
            <strong className='ProductPrice'>{product.price}</strong>
          </article>
        )}
      </div>
    </section>
  );
};

export default Shop;
