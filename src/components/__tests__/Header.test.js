import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Header from '../Header';

test('renders logo', () => {
  render(<BrowserRouter><Header /></BrowserRouter>);
  expect(screen.getByAltText(/prospresso logo/)).toBeInTheDocument();
});

test('renders correct heading', () => {
  render(<BrowserRouter><Header /></BrowserRouter>);
  expect(screen.getByRole('heading').textContent).toMatch(/prospresso/);
});

test('renders correct links', () => {
  render(<BrowserRouter><Header /></BrowserRouter>);
  expect(screen.getAllByRole('link')[1].textContent).toMatch(/Home/);
  expect(screen.getAllByRole('link')[2].textContent).toMatch(/Shop/);
});

it('renders consistently', () => {
  const { container } = render(<BrowserRouter><Header /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});
