import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Плюк будет', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shamansoft© Плюк/i);
  expect(linkElement).toBeInTheDocument();
});
