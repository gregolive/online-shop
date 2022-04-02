import '../styles/Cart.css';
import '@fortawesome/fontawesome-free/js/all';

const Cart = ({ open, items, handleClick }) => {
  const containerClass = (open) ? 'CartContainer Open' : 'CartContainer Close';

  const cartProducts = (
    (items && items.length > 0) ?
    <div className='CartProducts'>
      {items.map((product) =>
        <div>
          {product.name}
        </div>
      )}
    </div>
    : null
  );

  return (
    <div className={containerClass}>
      <div className='Cart'>
        <header className='CartHeader'>
          <div className='CartTitle'>
            <button type='button' className='Button TransparentButton' onClick={handleClick}>
              <i className='fa-solid fa-xmark'></i>
            </button>
            <h4>Shopping cart</h4>
          </div>
          <p className='CartCount'>0 items</p>
        </header>

        {cartProducts}

        
      </div>
    </div>
  );
};

export default Cart;
