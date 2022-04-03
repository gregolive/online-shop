import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../Cart';
import products from '../../helpers/Product';
import CartItem from '../../helpers/CartItem';

const testProduct = products[0];
const testItem = new CartItem(testProduct, 2)
const testItemCount = testItem.quantity;

test('renders close button only when no item is added', () => {
  render(<MemoryRouter><Cart /></MemoryRouter>);
  expect(screen.getAllByRole('button').length).toEqual(1);
});

test('renders 5 total buttons when one type of item is added', () => {
  render(<MemoryRouter><Cart items={[testItem]} itemCount={testItemCount}/></MemoryRouter>);
  expect(screen.getAllByRole('button').length).toEqual(5);
});

test('renders heading', () => {
  render(<MemoryRouter><Cart /></MemoryRouter>);
  expect(screen.getByRole('heading').textContent).toMatch(/Shopping cart/);
});

test('renders number of items', () => {
  render(<MemoryRouter><Cart items={[testItem]} itemCount={testItemCount}/></MemoryRouter>);
  expect(screen.getByText(/2 items/)).toBeInTheDocument();
});

test('renders product image', () => {
  render(<MemoryRouter><Cart items={[testItem]} itemCount={testItemCount}/></MemoryRouter>);
  expect(screen.getByAltText(`${testProduct.vendor} - ${testProduct.name}`)).toBeInTheDocument();
});

test('renders product vendor', () => {
  render(<MemoryRouter><Cart items={[testItem]} itemCount={testItemCount}/></MemoryRouter>);
  expect(screen.getByText(testProduct.vendor)).toBeInTheDocument();
});

test('renders product name', () => {
  render(<MemoryRouter><Cart items={[testItem]} itemCount={testItemCount}/></MemoryRouter>);
  expect(screen.getByText(testProduct.name)).toBeInTheDocument();
});

test('renders proceed to checkout button with proper text', () => {
  render(<MemoryRouter><Cart items={[testItem]} itemCount={testItemCount}/></MemoryRouter>);
  expect(screen.getAllByRole('button')[4].textContent).toMatch(/Proceed to Checkout/)
});

it('renders consistently', () => {
  const { container } = render(<Cart />);
  expect(container).toMatchSnapshot();
});
