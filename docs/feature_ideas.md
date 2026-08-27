# Feature Ideas

Ordered by how much they help the actual business — bookings, print sales, and
an audience you own — against how much work they are. Everything here was
checked against the current code; the "why" notes point at what's actually in
the repo today.

---

## Tier 1 — the conversion gaps

### A real contact form
**Why:** `/contact` is a `mailto:` link and nothing else. On a phone with no
mail client configured, that link does nothing, and an art buyer who taps it
and gets a dead end doesn't try again. The page already writes out the exact
brief you want — *the vibe / the vision / the deadline / the budget* — as
poetry. Turn those four lines into four inputs and you've got the best-worded
inquiry form in the business.

**How:** Formspree, Web3Forms, or Netlify Forms — all work on a static GitHub
Pages build with no backend. Keep the mailto as a secondary "or just write to
me" line. Style the inputs as underlines on near-black, no boxes, so the form
still reads like the poem.

### Email capture — "field notes"
**Why:** Instagram reach is rented; the follower list isn't yours and the
algorithm decides who sees a post. A mailing list is the one audience that
can't be taken away, and it's the thing that sells books and prints on the day
a new one drops.

**How:** Buttondown or ConvertKit embed, one field, on the print room page and
the footer. Ask for the email in the site's voice ("i send letters, rarely").

### Share cards (Open Graph)
**Why:** Every route serves the same `<title>outside the obvious</title>` and
the same meta description, and there's no `og:image` anywhere. When someone
drops the link in a DM, a Slack, or an email to a creative director — which is
exactly how this site gets passed around — it renders as a bare grey URL. A
photography site that previews with no photo is the worst possible first
impression.

**How:** A small `usePageMeta(title, description, image)` hook that sets
`document.title` and the meta/OG tags per route. Pick one strong image per
section as its `og:image`. Cheap, and it changes what the link *feels* like
everywhere it travels.

---

## Tier 2 — finished work that isn't wired up

There are eleven page components in `src/pages/` that no route points at.
Several are close to free wins.

### The books actually have pages
`src/pages/books/MidnightAtMain.js`, `APoemOfLima.js`, and `Mis.js` exist but
aren't in `App.js`, and the homepage books section links every book to
`/contact` instead. The three components are also stale — they import
`react-bootstrap`, which was removed from `package.json`, and their bodies are
placeholder text ("photo goes here").

**Worth doing:** rewrite the three as real pages in the current style — spreads
from the book, the poem, a buy link — and link the homepage cards to them.
Three published books is the strongest credential on the site and right now it
dead-ends in a contact form.

### Camera reviews — the organic-search hook
`src/pages/reviews/` has four components (Leica M3, Leica X2, Olympus OM-D
E-M1X, Ricoh GR III), also unrouted, also importing `react-bootstrap`. They
fetch markdown from `public/markdown/reviews/` — where three of the four files
are zero bytes and the fourth is one line. `src/reviews/RicohGRIIIReview.md` is
also empty.

**Why it matters:** gear reviews are the single best way a photographer pulls
in strangers from search. Nobody googles "fashion photographer houston" — they
google "ricoh gr iii street photography". Those readers land on a review,
click through to the work, and some of them book. It's the only feature here
that brings *new* people to the site rather than converting the ones Instagram
already sent.

**Worth doing:** pick the one camera you have the most to say about, write it
properly, route it at `/notes/ricoh-gr-iii`, and add a "notes" nav item once
there are two or three. Ship real writing on one camera before wiring up four
empty shells.

### About and fine art
`src/pages/About.js` is unrouted. `/gallery/fine-art` *is* routed but renders
"coming soon" and isn't in the nav — a live URL with nothing on it. Either
fill it or drop the route until there's work to show.

---

## Tier 3 — performance, which here is a real problem

`public/` is **49 MB** of gallery JPEGs. Individual files are ~1 MB at 2048 px;
`public/gallery/travel/` alone is 24 MB and its page loads every image in the
folder. On a phone on venue wifi — which is exactly where a QR-code visitor is
standing — that's a page that never finishes.

**How:**
1. Generate resized WebP/AVIF derivatives at build time (`sharp` in a prebuild
   script), keep the originals out of the deployed bundle.
2. Serve them with `srcset`/`sizes` from `GalleryImage` so phones get ~600 px
   files instead of 2048 px ones.
3. Add explicit `width`/`height` so the masonry grid stops reflowing as images
   land.

Expect an 80–90% drop in bytes with no visible quality loss. This is the
highest-impact technical change available and it's invisible when it works —
which is the point.

**Related:** `wotoFinder` hardcodes how many photos exist per genre
(`wotoFinder("street", 16)`), so adding a photo means editing a component. A
generated manifest — a build step that writes a JSON list of each folder's
images and their dimensions — kills that whole class of bug and gives the
`srcset` work the metadata it needs anyway.

---

## Tier 4 — the cool ones

### Lightbox, and "get this as a print"
*(the original idea in this file, still worth building)*

Clicking a gallery photo should open it full-bleed on near-black — keyboard
arrows, escape to close, swipe on mobile — with a single quiet line underneath:
**get this as a print**. Use the image path (`street/1.jpg`) as the ID, and
send it to the print room, or straight to the matching Pixieset gallery once
one exists.

This is the missing link between the galleries and the money. Right now the
print room only sells *event* photos; the portfolio work — the images people
actually stop on — has no path to a purchase at all.

### Per-event QR landing
`/hello` is already the tap-the-RFID-card page, and it's good. Make it read a
query param — `#/hello?e=nyfw25` — so a card tapped at a specific show lands on
a page that names that show, links that show's gallery and prints, and still
offers the vCard. One card design, different destination per event, and you
find out which events actually drive traffic.

### Analytics
There's currently no way to know which photographs people look at, which
gallery holds them longest, or whether the print room converts. Plausible or
Umami — privacy-first, no cookie banner, one script tag. You're making
decisions about what to shoot and what to sell with no data at all.

### Cleaner URLs
The app uses `HashRouter`, so every URL carries a `#` and search engines index
one page. The standard GitHub Pages fix — a `404.html` that redirects into
`BrowserRouter` — gets you `outsidetheobvious.com/gallery/fashion` and real
per-page indexing. Pairs directly with the per-route meta work in Tier 1.

### Structured data
A `sitemap.xml` plus JSON-LD (`Person` for Julien, `ImageObject` on the
galleries) tells Google there's a photographer here and what the pictures are.
Small, boring, and it's how image search finds you.

---

## Deliberately not suggested

Testimonial carousels, an AI-anything widget, a chatbot, a hero video, a
lightbox with a filmstrip and thumbnails and share buttons. The design brief
says the site should never look like it could belong to any photographer —
most "portfolio site features" are exactly the template smell it's avoiding.
The features above either make money, bring people in, or make the photographs
load. Nothing else earns a place.
