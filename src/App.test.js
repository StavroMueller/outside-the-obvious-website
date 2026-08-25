import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the site nav with a print room link', () => {
  render(<App />);
  expect(screen.getByText('outside the obvious', { selector: '.nav-logo' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'print room' })).toHaveAttribute('href', '#/print-room');
});

test('renders the print room page with coming-soon galleries', () => {
  window.location.hash = '#/print-room';
  render(<App />);
  expect(screen.getByRole('heading', { name: 'the print room' })).toBeInTheDocument();
  expect(screen.getByText('new york fashion week', { selector: '.print-room-title' })).toBeInTheDocument();
  expect(screen.getAllByText(/gallery coming soon/i).length).toBeGreaterThan(0);
  window.location.hash = '';
});
