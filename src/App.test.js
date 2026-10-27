import { render, screen, within } from '@testing-library/react';
import App from './App';
import { beforeTheShowImages } from './data/homeImages';

afterEach(() => {
  window.location.hash = '';
});

test('top nav links to the galleries, print room, merch and contact', () => {
  render(<App />);
  expect(screen.getByText('outside the obvious', { selector: '.nav-logo' })).toBeInTheDocument();
  const nav = screen.getByRole('navigation', { name: 'main navigation' });
  expect(within(nav).getByRole('link', { name: 'fashion' })).toHaveAttribute('href', '#/gallery/fashion');
  expect(within(nav).getByRole('link', { name: 'print room' })).toHaveAttribute('href', '#/print-room');
  expect(within(nav).getByRole('link', { name: 'merch' })).toHaveAttribute(
    'href',
    'https://outside-the-obvious-shop.fourthwall.com'
  );
  expect(within(nav).getByRole('link', { name: 'contact' })).toHaveAttribute('href', '#/contact');
});

test('homepage opens with the poem and keeps the poetic sections', () => {
  render(<App />);
  // The poem canvas scatters each word into its own span, so check the hero as a whole.
  expect(document.querySelector('.hero-poem-container').textContent).toMatch(/shutter/i);
  expect(screen.getByRole('link', { name: "let's talk" })).toHaveAttribute('href', '#/contact');
  expect(screen.getByText('midnight at main')).toBeInTheDocument();
  expect(screen.getByText(/chances to blink/)).toBeInTheDocument();
});

test('homepage carries both bodies of work with anchors the services link to', () => {
  render(<App />);
  const headings = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
  expect(headings.slice(0, 4)).toEqual(['backstage', 'at sea', 'hands', 'direction']);
  expect(screen.getByRole('link', { name: /i stand the night watch/ })).toHaveAttribute('href', '#/#night-watch');
  for (const id of ['before-the-show', 'night-watch', 'hands', 'about', 'contact']) {
    expect(document.getElementById(id)).not.toBeNull();
  }
  expect(screen.getByText(/the elissa/)).toBeInTheDocument();
  expect(screen.getByText(/atelier actara/)).toBeInTheDocument();
  expect(screen.queryByText(/february 2025/)).not.toBeInTheDocument();
});

test('backstage gallery is drawn from the catalogued frames with alt text', () => {
  render(<App />);
  const backstage = document.getElementById('before-the-show');
  const alts = within(backstage).getAllByRole('img').map((img) => img.getAttribute('alt'));
  expect(alts).toEqual(expect.arrayContaining(beforeTheShowImages.map((image) => image.alt)));
});

test('renders the print room page with coming-soon galleries', () => {
  window.location.hash = '#/print-room';
  render(<App />);
  expect(screen.getByRole('heading', { name: 'the print room' })).toBeInTheDocument();
  expect(screen.getByText('new york fashion week', { selector: '.print-room-title' })).toBeInTheDocument();
  expect(screen.getAllByText(/gallery coming soon/i).length).toBeGreaterThan(0);
});
