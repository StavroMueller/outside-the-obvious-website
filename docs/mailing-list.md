# The mailing list ("field notes")

The signup form appears in the site footer and near the bottom of the print
room. It posts straight to an email provider — there's no backend, nothing to
host, and no list of addresses stored in this repo.

**The form is hidden until you configure it.** `src/data/newsletter.js` ships
with `subscribeUrl: null`, which renders nothing anywhere on the site, the same
way the merch link stays hidden until there's a shop. One line turns it on.

## One-time setup

[Buttondown](https://buttondown.com) is the recommendation: it's built for
writers rather than marketers, the emails it sends are plain and unbranded
(no "powered by" footer, no tracking pixels by default), and it has a free
tier for small lists. Anything with an HTML embed form works — the notes for
other providers are at the bottom.

1. Make an account at [buttondown.com](https://buttondown.com) and pick a
   username. That username is part of your form endpoint, so choose the one
   you'd want public — `outsidetheobvious`.
2. Confirm your sending address under **Settings → Email**. Until you do,
   confirmations won't go out and signups will look broken from the outside.
3. Turn on **double opt-in** (Settings → Subscribing). It's usually the default
   and it's worth keeping: it's what makes the form's "check your inbox"
   message true, and it keeps typo'd and bot addresses off the list.
4. Open `src/data/newsletter.js` and fill in your endpoint:

   ```js
   const newsletterConfig = {
     subscribeUrl: 'https://buttondown.com/api/emails/embed-subscribe/outsidetheobvious',
     emailField: 'email',
     hiddenFields: { embed: '1' },
   };
   ```

5. Run `npm start` and subscribe with your own address. You should get a
   confirmation email, and the new address should appear in your Buttondown
   subscriber list. If it doesn't, see troubleshooting below.
6. Commit and push to `master` — the GitHub Pages workflow deploys it.

## Writing to the list

Nothing about sending lives in this repo; you write and send from the
provider's own interface. Worth saying out loud, though: the form promises
*"letters, rarely"*, and that promise is the reason people give you an address
in the first place. A list that gets four good letters a year outperforms one
that gets a monthly newsletter nobody opens.

Things actually worth a letter: a new book, a print run, a show you shot, a
gallery going live in the print room.

## Changing the copy

Both placements take `heading` and `blurb` props, so the wording can differ by
page — the footer is quiet and general, the print room leans on the fact that
someone's already looking at things to buy:

```jsx
<Newsletter
  className="newsletter--print-room"
  heading="know when the next one drops"
  blurb="new shows, new prints, new books — before they go up. letters, rarely."
/>
```

To add the form somewhere else, import the component and give it a
`className` for spacing. It renders nothing when unconfigured, so it's always
safe to drop in.

## Other providers

Change `emailField` to whatever the provider names its email input, and put
anything else the form needs into `hiddenFields`:

| Provider  | `emailField`    | `hiddenFields`                    |
|-----------|-----------------|-----------------------------------|
| Buttondown| `email`         | `{ embed: '1' }`                  |
| Kit       | `email_address` | usually none                      |
| Mailchimp | `EMAIL`         | the anti-bot field in their embed  |

The reliable way to find these: generate the provider's HTML embed form, and
read the `action` URL and the `name` attributes straight off it.

## Troubleshooting

**Nothing appears on the site.** `subscribeUrl` is still `null`, or the dev
server didn't pick up the change — restart `npm start`.

**The form says it worked but no email arrives.** The browser can't see the
provider's response — the endpoint doesn't send CORS headers, so the request
goes out "no-cors" and comes back opaque. The form reports success whenever
the request leaves the browser, which means a rejected signup looks identical
to an accepted one from the page's side. Check the provider's dashboard to see
what actually landed. The usual causes are an unconfirmed sending address, a
wrong `emailField`, or a typo in the endpoint URL.

**Everything fails with a network error.** That case *does* surface — the form
shows the "write to me and i'll add you myself" fallback. Check the endpoint
URL, and check that an ad blocker isn't blocking the provider's domain.
