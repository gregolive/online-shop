import uniqid from 'uniqid';

import pearlImg from '../img/Acaia-Pearl-S-black.jpg';
import tampImg from '../img/forcetamp585.jpg';
import basketImg from '../img/ims18g-ridgeless.jpg';
import knockboxImg from '../img/maple-knock-set.jpg';
import burrImg from '../img/ssp-multi-purpose.jpg';
import matImg from '../img/tamping-mat-corner.jpg';

class Product {
  constructor (name, vendor, price, stock, img) {
    this.id = uniqid();
    this.name = name;
    this.vendor = vendor;
    this.price = this.formatPrice(price);
    this.stock = stock;
    this.img = img;
  }

  inStock() { return (this.stock > 0) ? true : false };

  formatPrice = (value) => {
    const dollars = Math.trunc(value / 100);
    let cents = value % 100;
    if (cents < 10) { cents = '0' + cents; }
    return `$${dollars}.${cents}`
  };
};

const products = [
  new Product('Pearl Model S Coffee Scale - Black', 'Acaia', 19500, 5, pearlImg),
  new Product('The Force Tamp 58.5mm', 'Espresso Parts', 19900, 2, tampImg),
  new Product('Precision Portafilter Basket - Double 18g - Ridgeless', 'IMS', 3058, 4, basketImg),
  new Product('Maplewood Knockbox Set', 'IMS', 6396, 10, knockboxImg),
  new Product('Multi-Purpose Grinding Red Speed Coated 64mm Flat Burrs', 'SSP', 18500, 1, burrImg),
  new Product('Tamping Mat with Corner Edge', 'Barista Basics', 2800, 0, matImg),
];

export default products;

const findProduct = (productName) => products.filter((p) => p.name === productName)[0];

export { findProduct };
