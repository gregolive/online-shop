import uniqid from 'uniqid';

const formatPrice = (value) => {
  const dollars = Math.trunc(value / 100);
  let cents = value % 100;
  if (cents < 10) { cents = '0' + cents; }
  return `$${dollars}.${cents}`
};

const products = [
  { id: uniqid(), name: 'Pearl Model S Coffee Scale - Black', vendor: 'Acaia', price: formatPrice(19500), inStock: true, img: require('../img/Acaia-Pearl-S-black.jpg')},
  { id: uniqid(), name: 'The Force Tamp 58.5mm', vendor: 'Espresso Parts', price: formatPrice(19900), inStock: true, img: require('../img/forcetamp585.jpg')},
  { id: uniqid(), name: 'Precision Portafilter Basket - Double 18/20 gr - Ridgeless', vendor: 'IMS', price: formatPrice(3058), inStock: true, img: require('../img/ims18g-ridgeless.jpg')},
  { id: uniqid(), name: 'Maplewood Knockbox Set', vendor: 'Barista Basics', price: formatPrice(6396), inStock: true, img: require('../img/maple-knock-set.jpg')},
];

export default products;
