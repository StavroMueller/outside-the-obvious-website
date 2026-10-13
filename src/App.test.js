import { render, screen, within } from '@testing-library/react';
import App from './App';
import { heroImages } from './data/homeImages';

afterEach(() => {
  window.location.hash = '';
});

test('top nav links to each homepage section in page order', () => {
  render(<App />);
  expect(screen.getByText('outside the obvious', { selector: '.nav-logo' })).toBeInTheDocument();
  const nav = screen.getByRole('navigation', { name: 'main navigation' });
  const hrefs = within(nav).getAllByRole('link').slice(1).map((a) => a.getAttribute('href'));
  expect(hrefs).toEqual([
    '#/#intro',
    '#/#before-the-show',
    '#/#night-watch',
    '#/#hands',
    '#/#prints',
    '#/#about',
    '#/#contact',
  ]);
});

test('homepage renders the sections in order with the intro copy', () => {
  render(<App />);
  const headings = screen.getAllByRole('heading').map((h) => h.textContent);
  expect(headings).toEqual([
    'julien clifford',
    'before the show',
    'night watch',
    'hands',
    'prints',
    'about',
    'contact',
  ]);
  // The copy is set as stepped lines, so compare it with whitespace collapsed.
  expect(
    screen.getByText(
      'i photograph fashion shows from backstage, and life aboard tall ships. most of it happens before anyone is watching.'
    )
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'visit the print room' })).toHaveAttribute('href', '#/print-room');
  const contact = document.getElementById('contact');
  expect(within(contact).getByRole('link', { name: '@outsidetheobvious' })).toHaveAttribute(
    'href',
    'https://www.instagram.com/outsidetheobvious'
  );
});

// The masonry lays its items out column by column, so DOM order is not reading
// order. The data list is the reading order, so that is what gets checked.
test('hero gallery is the original six with the tallship frame second', () => {
  expect(heroImages.map((image) => image.src)).toEqual([
    '/gallery/fashion/1.jpg',
    '/gallery/tallships/hero.jpg',
    '/gallery/fashion/2.jpg',
    '/gallery/fashion/3.jpg',
    '/gallery/fashion/4.jpg',
    '/gallery/fashion/5.jpg',
    '/gallery/fashion/6.jpg',
  ]);
});

test('retired homepage copy is gone', () => {
  render(<App />);
  expect(screen.queryByText(/somewhere between the shutter and the skin/)).not.toBeInTheDocument();
  expect(screen.queryByText(/the almost-kiss/)).not.toBeInTheDocument();
  expect(screen.queryByText(/i carry your heart/)).not.toBeInTheDocument();
  expect(screen.queryByText(/midnight at main/)).not.toBeInTheDocument();
  expect(screen.queryByText(/chances to blink/)).not.toBeInTheDocument();
});

test('renders the print room page with coming-soon galleries', () => {
  window.location.hash = '#/print-room';
  render(<App />);
  expect(screen.getByRole('heading', { name: 'the print room' })).toBeInTheDocument();
  expect(screen.getByText('new york fashion week', { selector: '.print-room-title' })).toBeInTheDocument();
  expect(screen.getAllByText(/gallery coming soon/i).length).toBeGreaterThan(0);
});
