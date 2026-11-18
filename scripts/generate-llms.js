// Writes public/llms.txt and public/pricing.md from src/data/pricing.json, so
// the prices crawlers and language models read are the ones the pricing page
// shows. Runs before every start and build (see package.json).
//
// The site is a client-rendered app on hash routes, which most crawlers cannot
// read. These two static files are what they get instead.
const fs = require('fs');
const path = require('path');
const pricing = require('../src/data/pricing.json');

const SITE = 'https://outsidetheobvious.com';
const EMAIL = 'contact@outsidetheobvious.com';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const priceLabel = (price) => price ?? 'On request';
const bullets = (lines) => lines.map((line) => `- ${line}`).join('\n');

const booking = `Email ${EMAIL} with:

- the dates
- the brief (what is being photographed, and where)
- the budget, if there is one

Julien answers with a quote. A 50% deposit holds the date.`;

const serviceSummaries = pricing.services
  .map((service) => `- ${service.title}: ${priceLabel(service.price)}. ${service.summary}`)
  .join('\n');

const llmsTxt = `# Outside the Obvious

> Julien Clifford is a fashion photographer in Houston, Texas. Julien photographs fashion shows from backstage and from the runway, in Houston and at New York Fashion Week, takes editorial commissions from brands and magazines, and is available to book.

Julien has photographed more than ninety runway shows in Houston and New York since 2018. Julien runs Atelier Actara, which produces fashion shows, and so shoots backstage from inside the work. Julien also crews the tall ship Elissa (built 1877) out of Galveston and photographs life aboard, partly on self-developed film. There are three published books of photographs and poems: Midnight at Main (2024), A Poem of Lima (2023) and Mis (2022).

The site is a JavaScript app. Its pages live on hash routes (${SITE}/#/pricing), which fetch as the same HTML shell. Read the Markdown files below instead.

## Services and prices

All prices are in US dollars.

${serviceSummaries}

## Terms

${bullets(pricing.terms)}

## How to book

${booking}

## Pages

- [Pricing](${SITE}/pricing.md): services, prices and terms, in full
- [Pricing, as a web page](${SITE}/#/pricing)
- [Contact](${SITE}/#/contact): ${EMAIL}
- [Fashion gallery](${SITE}/#/gallery/fashion): runway and backstage photographs
- [Street gallery](${SITE}/#/gallery/street)
- [Travel gallery](${SITE}/#/gallery/travel)
- [Print room](${SITE}/#/print-room): prints and digital downloads, show by show

## Elsewhere

- [Instagram](https://instagram.com/outsidetheobvious): @outsidetheobvious
- [Merch shop](https://outside-the-obvious-shop.fourthwall.com): shirts and hats
- [Julien Clifford](https://jpclifford.com/)
`;

const serviceSections = pricing.services
  .map(
    (service) => `## ${service.title}

**${priceLabel(service.price)}**

${service.summary}

${bullets(service.includes)}`
  )
  .join('\n\n');

const pricingMd = `# Pricing: Outside the Obvious

Julien Clifford, fashion photographer, Houston, Texas. Runway, backstage and editorial photography in Houston, at New York Fashion Week and on location. All prices are in US dollars.

${serviceSections}

## Terms

${bullets(pricing.terms)}

## How to book

${booking}
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), llmsTxt);
fs.writeFileSync(path.join(PUBLIC_DIR, 'pricing.md'), pricingMd);
