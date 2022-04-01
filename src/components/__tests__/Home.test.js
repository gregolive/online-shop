import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders hero text', () => {
  render(<Home />);
  expect(screen.getByRole('heading').textContent).toMatch(/Your one stop shop for high quality espresso tools!/);
});

test('renders shop now button', () => {
  render(<Home />);
  expect(screen.getByRole('button').textContent).toMatch(/Shop now/);
});

it('renders consistently', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
