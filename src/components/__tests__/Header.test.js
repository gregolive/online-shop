import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

test('renders logo', () => {
  render(<MemoryRouter><Header /></MemoryRouter>);
  expect(screen.getByAltText(/prospresso logo/)).toBeInTheDocument();
});

test('renders correct heading', () => {
  render(<MemoryRouter><Header /></MemoryRouter>);
  expect(screen.getByRole('heading').textContent).toMatch(/prospresso/);
});

test('renders correct links', () => {
  render(<MemoryRouter><Header /></MemoryRouter>);
  expect(screen.getAllByRole('link')[1].textContent).toMatch(/Home/);
  expect(screen.getAllByRole('link')[2].textContent).toMatch(/Shop/);
});

test('renders cart and menu buttons', () => {
  render(<MemoryRouter><Header /></MemoryRouter>);
  expect(screen.getAllByRole('button').length).toEqual(2);
});

it('renders consistently', () => {
  const { container } = render(<MemoryRouter><Header /></MemoryRouter>);
  expect(container).toMatchSnapshot();
});
