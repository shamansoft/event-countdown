import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Плюк будет', () => {
  render(<App />);
  const linkElement = screen.getByText(/Плюк/i);
  expect(linkElement).toBeInTheDocument();
});
