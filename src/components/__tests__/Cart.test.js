import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Cart from '../Cart';
import '@fortawesome/fontawesome-free/js/all';

test('renders heading', () => {
  render(<BrowserRouter><Cart /></BrowserRouter>);
  expect(screen.getByRole('heading').textContent).toMatch(/Shopping cart/);
});

test('renders number of items', () => {
  render(<BrowserRouter><Cart /></BrowserRouter>);
  expect(screen.getByText(/ items/)).toBeInTheDocument();
});
