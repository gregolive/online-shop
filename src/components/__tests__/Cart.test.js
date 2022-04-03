import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../Cart';
import '@fortawesome/fontawesome-free/js/all';

test('renders heading', () => {
  render(<MemoryRouter><Cart /></MemoryRouter>);
  expect(screen.getByRole('heading').textContent).toMatch(/Shopping cart/);
});

test('renders number of items', () => {
  render(<MemoryRouter><Cart /></MemoryRouter>);
  expect(screen.getByText(/items/)).toBeInTheDocument();
});
