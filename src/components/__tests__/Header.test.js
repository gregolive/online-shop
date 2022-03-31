import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../Header';

beforeEach(() => {
  render(<Header />);
});

it('renders logo', () => {
  expect(screen.getByAltText(/prospresso logo/)).toBeInTheDocument();
});

it('renders correct heading', () => {
  expect(screen.getByRole('heading').textContent).toMatch(/prospresso/);
});

it('renders correct links', () => {
  expect(screen.getAllByRole('link')[1].textContent).toMatch(/Home/);
  expect(screen.getAllByRole('link')[2].textContent).toMatch(/Shop/);
});
