import '../styles/Cart.css';
import '@fortawesome/fontawesome-free/js/all';

const Cart = ({ open, items, itemCount, closeCart, updateCart, removeCartItem }) => {
  const containerClass = (open) ? 'CartContainer Open' : 'CartContainer Close';

  const cartProducts = (
    (itemCount > 0) ? items.map((item) =>
      <div key={item.product.id} className='CartRow'>
        <img src={item.product.img} alt={`${item.product.vendor} - ${item.product.name}`} />
        
        <div className='ItemInfo'>
          <small>{item.product.vendor}</small>
          <h5>{item.product.name}</h5>
          <strong>{item.product.price}</strong>
        </div>
        
        <div className='ItemQuantity'>
          <button type='button' className='Button TransparentButton' onClick={() => {updateCart(item.product, -1, false)}}>
            <i className='fa-solid fa-minus'></i>
          </button>
          <span>{item.quantity}</span>
          <button type='button' className='Button TransparentButton' onClick={() => {updateCart(item.product, 1, false)}}>
            <i className='fa-solid fa-plus'></i>
          </button>

          <button type='button' className='Button TransparentButton' onClick={() => removeCartItem(item.product.name, item.quantity)}>
            Remove
          </button>
        </div>
      </div>
    ) : null
  );

  return (
    <div className={containerClass}>
      <div className='Cart'>
        <header className='CartHeader'>
          <div className='CartTitle'>
            <button type='button' className='Button TransparentButton' onClick={closeCart}>
              <i className='fa-solid fa-xmark'></i>
            </button>
            <h4>Shopping cart</h4>
          </div>

          <p className='CartCount'>{itemCount} {(itemCount === 1) ? 'item' : 'items'}</p>
        </header>

        <div className='CartProducts'>
          {cartProducts}
        </div>

        {(itemCount > 0) ? <button type='button' className='Button PrimaryButton'>Proceed to Checkout</button> : null}
      </div>
    </div>
  );
};

export default Cart;
