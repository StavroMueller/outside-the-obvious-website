// Everything sold in the print room — events, shows, and any future
// collections — one big list, each backed by a Pixieset client gallery.
// When a Pixieset collection is ready, paste its share URL into galleryUrl.
// A null galleryUrl shows a "gallery coming soon" state linking to /contact.
const printRoomItems = [
  {
    id: 'nyfw-feb-2025',
    title: 'new york fashion week',
    date: 'february 2025',
    location: 'new york',
    description: 'the city that never stops looking',
    galleryUrl: null,
  },
  {
    id: 'houston-runway-2024',
    title: 'houston runway',
    date: 'fall 2024',
    location: 'houston',
    description: 'ninety shows of not blinking',
    galleryUrl: null,
  },
  {
    id: 'midnight-at-main-2024',
    title: 'midnight at main',
    date: '2024',
    location: 'downtown houston',
    description: 'neon ghosts, 3am secrets',
    galleryUrl: null,
  },
];

export default printRoomItems;
