import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Product from '../Product';
import products from '../../helpers/products';

const testProduct = products[0];

const renderWithRouter = () => (
  render(
    <MemoryRouter initialEntries={[`/shop/${testProduct.name}`]}>
      <Routes>
        <Route path='/shop/:productName' element={<Product />} />
      </Routes>
    </MemoryRouter>
  )
);

test('renders product image', () => {
  renderWithRouter();
  expect(screen.getByAltText(`${testProduct.vendor} - ${testProduct.name}`)).toBeInTheDocument();
});

test('renders product vendor', () => {
  renderWithRouter();
  expect(screen.getByText(testProduct.vendor)).toBeInTheDocument();
});

test('renders product id', () => {
  renderWithRouter();
  expect(screen.getByText(testProduct.id.toUpperCase())).toBeInTheDocument();
});

test('renders product name in all caps', () => {
  renderWithRouter();
  expect(screen.getByRole('heading').textContent).toMatch(testProduct.name.toUpperCase());
});

test('renders product price', () => {
  renderWithRouter();
  expect(screen.getByText(testProduct.price)).toBeInTheDocument();
});

test('renders product stock', () => {
  renderWithRouter();
  expect(screen.getByText(/In stock/)).toBeInTheDocument();
});

test('renders add to cart button', () => {
  renderWithRouter();
  expect(screen.getAllByRole('button')[0].textContent).toMatch(/Add to cart/);
});

test('renders buy now button', () => {
  renderWithRouter();
  expect(screen.getAllByRole('button')[1].textContent).toMatch(/Buy now/);
});
