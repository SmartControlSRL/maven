import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Maven Group heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Maven Group/i);
  expect(headingElement).toBeInTheDocument();
});
