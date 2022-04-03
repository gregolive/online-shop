import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';

test('renders hero text', () => {
  render(<MemoryRouter><Home /></MemoryRouter>);
  expect(screen.getByRole('heading').textContent).toMatch(/Your one stop shop for high quality espresso tools!/);
});

test('renders shop now button', () => {
  render(<MemoryRouter><Home /></MemoryRouter>);
  expect(screen.getByRole('button').textContent).toMatch(/Shop now/);
});

it('renders consistently', () => {
  const { container } = render(<MemoryRouter><Home /></MemoryRouter>);
  expect(container).toMatchSnapshot();
});
