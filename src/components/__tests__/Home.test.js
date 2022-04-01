import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Home from '../Home';

test('renders hero text', () => {
  render(<BrowserRouter><Home /></BrowserRouter>);
  expect(screen.getByRole('heading').textContent).toMatch(/Your one stop shop for high quality espresso tools!/);
});

test('renders shop now button', () => {
  render(<BrowserRouter><Home /></BrowserRouter>);
  expect(screen.getByRole('button').textContent).toMatch(/Shop now/);
});

it('renders consistently', () => {
  const { container } = render(<BrowserRouter><Home /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});
