// "field notes" — the mailing list.
//
// Once you've made an account with an email provider (Buttondown is the
// recommendation — see docs/mailing-list.md), paste that provider's form
// endpoint into subscribeUrl. While it's null, the signup form is hidden
// everywhere on the site, exactly like the merch link.
//
// Buttondown example:
//   subscribeUrl: 'https://buttondown.com/api/emails/embed-subscribe/outsidetheobvious',
//   emailField:   'email',
//   hiddenFields: {},
//
// Other providers use a different name for the email input, which is what
// emailField is for (Kit uses 'email_address', Mailchimp uses 'EMAIL').
// Anything in hiddenFields is posted alongside it — tags, list ids, the
// bot-check tokens some providers want.
const newsletterConfig = {
  subscribeUrl: null,
  emailField: 'email',
  hiddenFields: {},
};

export default newsletterConfig;
