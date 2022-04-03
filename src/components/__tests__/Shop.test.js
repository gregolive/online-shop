import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Shop from '../Shop';
import products from '../../helpers/products';

test('renders shop heading', () => {
  render(<MemoryRouter><Shop /></MemoryRouter>);
  expect(screen.getAllByRole('heading')[0].textContent).toMatch(/Shop Espresso Tools/);
});

test('renders products', () => {
  render(<MemoryRouter><Shop /></MemoryRouter>);
  expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
});

const testProduct = products[0];

test('renders product image', () => {
  render(<MemoryRouter><Shop /></MemoryRouter>);
  expect(screen.getByAltText(`${testProduct.vendor} - ${testProduct.name}`)).toBeInTheDocument();
});

test('renders product vendor', () => {
  render(<MemoryRouter><Shop /></MemoryRouter>);
  expect(screen.getAllByText(testProduct.vendor)[0]).toBeInTheDocument();
});

test('renders product name', () => {
  render(<MemoryRouter><Shop /></MemoryRouter>);
  expect(screen.getByText(testProduct.name)).toBeInTheDocument();
});

test('renders product price', () => {
  render(<MemoryRouter><Shop /></MemoryRouter>);
  expect(screen.getAllByText(testProduct.price)[0]).toBeInTheDocument();
});

test('renders add to cart button', () => {
  render(<MemoryRouter><Shop /></MemoryRouter>);
  expect(screen.getAllByRole('button')[0].textContent).toMatch(/Add to cart/);
});

it('renders consistently', () => {
  const { container } = render(<MemoryRouter><Shop /></MemoryRouter>);
  expect(container).toMatchSnapshot();
});
