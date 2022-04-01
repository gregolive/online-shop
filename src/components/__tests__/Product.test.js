import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Product from '../Product';
import products from '../../helpers/products';

const testProduct = products[0];

test('renders product image', () => {
  render(<BrowserRouter><Product testProduct={ testProduct }/></BrowserRouter>);
  expect(screen.getByAltText(`${testProduct.vendor} - ${testProduct.name}`)).toBeInTheDocument();
});

test('renders product vendor', () => {
  render(<BrowserRouter><Product testProduct={ testProduct }/></BrowserRouter>);
  expect(screen.getByText(testProduct.vendor)).toBeInTheDocument();
});

test('renders product id', () => {
  render(<BrowserRouter><Product testProduct={ testProduct }/></BrowserRouter>);
  expect(screen.getByText(testProduct.id.toUpperCase())).toBeInTheDocument();
});

test('renders product name', () => {
  render(<BrowserRouter><Product testProduct={ testProduct }/></BrowserRouter>);
  expect(screen.getByRole('heading').textContent).toMatch(testProduct.name);
});

test('renders product price', () => {
  render(<BrowserRouter><Product testProduct={ testProduct }/></BrowserRouter>);
  expect(screen.getByText(testProduct.price)).toBeInTheDocument();
});

test('renders product stock', () => {
  render(<BrowserRouter><Product testProduct={ testProduct }/></BrowserRouter>);
  expect(screen.getByText(/In stock/)).toBeInTheDocument();
});

test('renders add to cart button', () => {
  render(<BrowserRouter><Product testProduct={ testProduct }/></BrowserRouter>);
  expect(screen.getAllByRole('button')[0].textContent).toMatch(/Add to cart/);
});

test('renders buy now button', () => {
  render(<BrowserRouter><Product testProduct={ testProduct }/></BrowserRouter>);
  expect(screen.getAllByRole('button')[1].textContent).toMatch(/Buy now/);
});
