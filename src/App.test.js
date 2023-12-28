import { render, screen } from '@testing-library/react';
import App from './App';

test('renders User Profile: Tom Nguyen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tom Nguyen/i);
  expect(linkElement).toBeInTheDocument();
});
