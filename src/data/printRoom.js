// Everything sold in the print room: events, shows, and any future
// collections, one big list, each backed by a Pixieset client gallery.
// When a Pixieset collection is ready, paste its share URL into galleryUrl.
// A null galleryUrl shows a "gallery coming soon" state linking to /contact.
const printRoomItems = [
  {
    id: 'nyfw-feb-2025',
    title: 'new york fashion week',
    date: 'february 2025',
    location: 'new york',
    description: 'runway and backstage, february 2025',
    galleryUrl: null,
  },
  {
    id: 'houston-runway-2024',
    title: 'houston runway',
    date: 'fall 2024',
    location: 'houston',
    description: 'runway shows in houston, fall 2024',
    galleryUrl: null,
  },
  {
    id: 'midnight-at-main-2024',
    title: 'midnight at main',
    date: '2024',
    location: 'downtown houston',
    description: 'downtown houston after midnight, from the book',
    galleryUrl: null,
  },
];

export default printRoomItems;
