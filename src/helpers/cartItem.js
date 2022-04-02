class CartItem {
  constructor (product, quantity) {
    this.product = product;
    this.quantity = quantity;
  };

  updateQuantity (count) {
    this.quantity += count;
  }
};

export default CartItem;
