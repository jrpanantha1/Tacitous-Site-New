# Tacitous marketing site

Static React site for www.tacitous.com, replacing the WordPress site. Built with Vite, React 19 and React Router,
prerendered to plain HTML at build time and served from Firebase Hosting. The contact form posts to a Firebase
Cloud Function.

## Develop

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # type-check, build, prerender every page into dist/ + sitemap.xml
```

Content lives in `src/content/` (navigation, FAQ, modules, press articles). Pages are in `src/pages/`, brand tokens
at the top of `src/styles.css`. To add a page, add its route in `src/App.tsx` and its title and description in
`src/routes.ts` so it is prerendered and listed in the sitemap.

## Firebase setup (once)

1. Create or pick a Firebase project and put its id in `.firebaserc`.
2. Upgrade it to the Blaze plan (needed for Cloud Functions).
3. Create a Firestore database (region `europe-west2`, London) and deploy the locked-down rules.
4. Install the **Trigger Email from Firestore** extension (`firebase ext:install firebase/firestore-send-email`),
   collection `mail`, with your SMTP details (for example Microsoft 365 or a SendGrid account).
5. Optional: set a TTL policy on `contactRateLimits.expiresAt` so rate-limit counters clean themselves up.
6. Optional: set `CONTACT_NOTIFY_TO` in `functions/.env` to change where enquiries are emailed (default info@tacitous.com).

### Automatic deploys (recommended)

`.github/workflows/firebase.yml` builds every push. Merges to `main` deploy hosting, the contact function and
Firestore rules; pull requests get a temporary preview URL. Deploy jobs are skipped until you set the repository
variable `FIREBASE_PROJECT_ID` (Settings > Secrets and variables > Actions > Variables). It also needs one repository secret,
`FIREBASE_SERVICE_ACCOUNT`: the JSON key of a Google Cloud service account with the Firebase Admin role
(plus Cloud Functions Admin and Service Account User if functions deploys are refused).

### Manual deploys

```bash
npm install -g firebase-tools
firebase login
(cd functions && npm install)
npm run deploy       # builds the site and deploys hosting, the contact function and Firestore rules
```

Enquiries are stored in the `enquiries` collection and emailed to the team. The form has a honeypot field, a
consent checkbox and a per-IP limit of 5 messages an hour. If spam becomes a problem, add Firebase App Check with
reCAPTCHA Enterprise.

## Going live from GoDaddy

1. Deploy, then check the `*.web.app` preview URL.
2. In Firebase Console > Hosting > Add custom domain, add `www.tacitous.com` and `tacitous.com` (redirect to www).
3. Add the TXT and A records Firebase shows in GoDaddy DNS, replacing the existing A/CNAME records for the site.
   Leave the MX records alone so email keeps working.
4. Firebase issues the SSL certificate automatically (can take up to a few hours).
5. `firebase.json` 301-redirects every old WordPress URL (pages, posts, categories, archives) to its new home.

## Still to do

- Product screens live in `public/screens/app-*.webp` (1440x900). They were captured from a local Tacitous Next build
  running on emulators with the fictional demonstration personas, not from a customer tenant. To replace one, keep the
  file name and size, or update the `screen` entry in `src/content/features.ts` or `src/content/journeys.ts`.
- Pathway to Expertise is not on the Explore page because it was not found in the Tacitous Next source. Add it to
  `src/content/features.ts` once its behaviour and a real screen are confirmed.
- The expertise network on `/explore` uses illustrative data from `src/content/network.ts`. Keep it to fictional people.
- Add each press article's verified publish date (`date`, as `YYYY-MM-DD`) and, where it first appeared elsewhere, its
  `original` link in `src/content/press.ts`. Dates are hidden until set.
- Add the Knoco International logo to the Partners page once Knoco has approved its use.
- Replace the draft Terms text in `src/pages/Legal.tsx` with your approved wording.
- Only add testimonials, client logos, statistics or certifications you have evidence and permission for.
