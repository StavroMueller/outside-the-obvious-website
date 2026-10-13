// Photographs shown on the homepage, in the order they appear.
// Alt text is plain and descriptive: it is read aloud by screen readers,
// so it describes what is in the frame and nothing more.

const fashionPath = (n) => `${process.env.PUBLIC_URL}/gallery/fashion/${n}.jpg`;
const tallshipPath = (name) => `${process.env.PUBLIC_URL}/gallery/tallships/${name}.jpg`;

const fashion = {
  1: { src: fashionPath(1), alt: 'Model in a green hooded garment, colour portrait' },
  2: { src: fashionPath(2), alt: 'Model having an earring adjusted backstage, black and white' },
  3: { src: fashionPath(3), alt: 'Model walking the runway past a seated audience, black and white' },
  4: { src: fashionPath(4), alt: 'Model on the runway in front of a projected screen, black and white' },
  5: { src: fashionPath(5), alt: 'Model waiting in a folding chair before a show, black and white' },
  6: { src: fashionPath(6), alt: 'Two models at a backstage mirror, one adjusting their hair, black and white' },
  7: { src: fashionPath(7), alt: 'Makeup artist finishing a model\'s eye makeup backstage, black and white' },
  10: { src: fashionPath(10), alt: 'Models lined up backstage waiting to walk, black and white' },
  11: { src: fashionPath(11), alt: 'Model in a blonde wig and sunglasses holding a prop backstage, black and white' },
  12: { src: fashionPath(12), alt: 'Close-up of a linen dress neckline with a small gold label, colour' },
  13: { src: fashionPath(13), alt: 'Hem of a black dress and heeled sandals mid-step, colour' },
};

// TODO (missing asset): public/gallery/tallships/hero.jpg is not in the repo yet.
// Until the file lands, the slot renders as a marked placeholder. Replace the
// alt text with a plain description of the frame once it is chosen.
const tallshipHero = {
  src: tallshipPath('hero'),
  alt: 'Tall ship at night, photograph to be supplied',
};

// TODO (missing assets): no tallship photographs are in the repo yet. These six
// slots expect public/gallery/tallships/1.jpg through 6.jpg and render as marked
// placeholders until the files exist. Give each one a plain alt description then.
const tallships = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: tallshipPath(n),
  alt: `Tall ship photograph ${n}, to be supplied`,
}));

// Original opening images 1 to 6 in their original order, with the tallship
// frame inserted second, straight after the green portrait.
export const heroImages = [
  fashion[1],
  tallshipHero,
  fashion[2],
  fashion[3],
  fashion[4],
  fashion[5],
  fashion[6],
];

// Backstage frames only. Images 12 and 13 are colour in the repo and stay colour.
// TODO (missing asset): the 4x5 Grid Show photograph should close this section.
// It is not in public/gallery today; append it here once it is.
export const beforeTheShowImages = [2, 5, 6, 7, 10, 11, 12, 13].map((n) => fashion[n]);

export const nightWatchImages = tallships;

// Close frames of hands at work. Drawn from the fashion set for now;
// add tallship frames of hands on lines here once those photographs exist.
export const handsImages = [7, 2, 6, 11].map((n) => fashion[n]);
