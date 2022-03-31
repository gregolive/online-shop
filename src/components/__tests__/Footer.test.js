import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('renders github link', () => {
  render(<Footer />);
  expect(screen.getByRole('link').textContent).toMatch(/gregolive/);
});

it('renders consistently', () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
