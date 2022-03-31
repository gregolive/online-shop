import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders logo', () => {
  render(<Header />);
  expect(screen.getByAltText(/prospresso logo/)).toBeInTheDocument();
});

test('renders correct heading', () => {
  render(<Header />);
  expect(screen.getByRole('heading').textContent).toMatch(/prospresso/);
});

test('renders correct links', () => {
  render(<Header />);
  expect(screen.getAllByRole('link')[1].textContent).toMatch(/Home/);
  expect(screen.getAllByRole('link')[2].textContent).toMatch(/Shop/);
});

it('renders consistently', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
