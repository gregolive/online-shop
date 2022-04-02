import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Cart from '../Cart';

test('renders close button', () => {
  render(<BrowserRouter><Cart /></BrowserRouter>);
  expect(screen.getAllByRole('button')[0].textContent).toMatch(/Back to shop/);
});

test('renders heading', () => {
  render(<BrowserRouter><Cart /></BrowserRouter>);
  expect(screen.getByRole('heading').textContent).toMatch(/Shopping cart/);
});

test('renders number of items', () => {
  render(<BrowserRouter><Cart /></BrowserRouter>);
  expect(screen.getByText(/ items/)).toBeInTheDocument();
});
