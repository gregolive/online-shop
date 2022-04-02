class CartItem {
  constructor (product, quantity) {
    this.product = product;
    this.quantity = quantity;
  };

  updateQuantity (count) {
    console.log(this.quantity);
    console.log(count);
    this.quantity += count;
  }
};

export default CartItem;
