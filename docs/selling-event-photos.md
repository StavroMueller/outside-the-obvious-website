# Selling event photos with Pixieset

The `/print-room` page on the site ("the print room") lists each show with a "view & buy photos" button.
Each button links to a Pixieset client gallery where visitors buy prints and
digital downloads. Pixieset handles checkout, print lab fulfillment, and shipping —
you never touch an order.

## One-time setup

1. Create an account at [pixieset.com](https://pixieset.com) (free plan: 3GB storage,
   15% commission on sales; paid plans ~$10–20/mo drop the commission to 0%).
2. Go to **Store → Settings** and connect a payout method (Stripe or PayPal).
3. Pick a print lab under **Store → Products** — WHCC is the usual US choice — and
   create a **price sheet**: for each product (4×6, 8×10, canvas, etc.) set your
   markup over the lab cost. That markup is your profit.
4. Set **digital download** pricing on the same price sheet if you want to sell
   files (per-photo and full-gallery pricing both work).
5. Under **Store → Settings**, enable automatic sales tax collection — Pixieset
   collects and remits tax on orders it processes.

## Per event

1. Create a **Collection** in Pixieset named after the event, upload the photos.
2. Turn on the **Store** for that collection and attach your price sheet.
3. Copy the collection's share URL (e.g. `https://outsidetheobvious.pixieset.com/nyfw2025/`).
4. Paste it into `src/data/printRoom.js` as that event's `galleryUrl`, and add a new
   entry to the array if the event isn't listed yet:

   ```js
   {
     id: 'nyfw-feb-2025',
     title: 'new york fashion week',
     date: 'february 2025',
     location: 'new york',
     description: 'the city that never stops looking',
     galleryUrl: 'https://outsidetheobvious.pixieset.com/nyfw2025/',
   },
   ```

5. Rebuild and deploy the site. Events with `galleryUrl: null` show a
   "gallery coming soon — inquire" state instead of a dead link.

## Selling more

- Share the gallery link (or a QR code pointing at it) at the event itself —
  backstage, on a card, in your Instagram bio. People buy most in the first days
  after an event.
- Pixieset's email tools can notify everyone with gallery access when the store
  opens or a sale runs.
- Turn on face search ("find my photos") in the collection settings so attendees
  can find themselves quickly.
