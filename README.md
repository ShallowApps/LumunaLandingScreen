# Lumuna landing page

Static site for https://lumuna.app. No build step, dependencies, external fonts, or analytics.

## Preview

Run `python3 -m http.server 8765 --directory LumunaLandingScreen` from the app repository, then open http://localhost:8765. If running inside this folder, omit `--directory LumunaLandingScreen`.

## Pages

- `/` or `/#home`: landing page
- `/#explore`: feature section
- `/#support`: help and FAQ
- `/#privacy`: privacy policy
- `/#terms`: terms of use

Existing app links retain their hash routes. Content and navigation also work without JavaScript. JavaScript adds the appearance selector, heading focus on navigation, and brief entrance reveals. Motion respects the system reduced-motion preference; there are no continuously running animations.

## Appearance and assets

System appearance is the default. Light and Dark overrides are stored in `lumuna-theme` in browser local storage; choosing System removes the override. The simplified design uses a centered brand and folded-phone hero, a single product story, and three compact features. The light theme uses warm off-white and charcoal; the dark theme uses near-black and soft pink. Layout direction inspired by Halide (https://halide.cam/); implementation, imagery, and copy are Lumuna’s own.

`images/` contains WebP copies of the four user-supplied App Store preview images. Originals remain in `AppStore/screenshots-lumuna-duo/cutouts/` and `AppStore/screenshots-lumuna/iPhone-medium-1206x2622/`. These include illustrative device mockups; the page labels them as previews. Regenerate using `cwebp -q 86 input.png -o output.webp`.

Launch messaging displays “Coming soon on the App Store” without pricing. The launch badges are intentionally non-interactive; add the verified listing link when the app is available.

Contact: contact@shallowapps.com

## Hosting

Ready for GitHub Pages. `CNAME` points at `lumuna.app`; `.nojekyll` serves files as-is. Publish this folder's repository from `main` / root. Local edits do not automatically publish the site.

## Publication and domain security

Publish only this landing-page repository or the clean site ZIP, not the parent Xcode app repository. The ZIP contains only HTML, CSS, JavaScript, icons, public preview images, robots.txt, sitemap.xml, CNAME, and .nojekyll. It excludes Git history, documentation, local files, and source app assets.

Before making the repository public, review its existing commits and author identity. A clean ZIP does not include prior commits; uploading it to a fresh repository avoids exposing the old history. Use GitHub's private/noreply commit email if you want to keep your personal email out of future public commits. The public support address contact@shallowapps.com is intentional business contact information.

For lumuna.app:

1. Verify ownership in account/organization Settings → Pages using GitHub's DNS TXT record. Keep the verification record. Avoid wildcard DNS records.
2. Configure repository Settings → Pages to publish main / root and set the custom domain to lumuna.app. CNAME already matches.
3. Configure DNS according to GitHub's current custom-domain instructions. GitHub shows the required records; use your actual repository owner when configuring a www CNAME.
4. Enable Enforce HTTPS after certificate provisioning. Test the canonical domain and any www redirect.
5. Add https://lumuna.app/ to Google Search Console, submit sitemap.xml, and inspect the homepage after publication. Hash links are sections of the same document and are intentionally not separate sitemap entries.

Official guidance:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

## Static security and SEO

The site has no forms, account system, external scripts, remote fonts, analytics, or API calls. A meta Content Security Policy allows only local scripts, styles, and images; blocks network requests by scripts, embedded content, plugins, and form submissions; and permits only the exact hashed inline structured-data block. If that JSON is edited, update its CSP SHA-256 hash too. The appearance bootstrap lives in theme.js to avoid executable inline JavaScript. A no-referrer policy limits outgoing referrer information. Descriptive PNG metadata has been removed.

GitHub Pages controls response headers. Meta CSP cannot enforce frame-ancestors or headers such as HSTS and X-Content-Type-Options; these require a hosting/CDN configuration if needed. No unused _headers file is included because GitHub Pages would not apply it. Domain/DNS/HTTPS settings must be verified after deployment; local review cannot certify them.

SEO includes a descriptive title, description, canonical HTTPS URL, Open Graph/Twitter metadata, image descriptions and dimensions, WebSite structured data, robots.txt and a one-URL sitemap. The coming-soon app is not given fabricated prices, ratings, or download availability in structured data. The 404 page is noindex and retains GitHub Pages' 404 status instead of redirecting every missing address to the homepage. Indexing and ranking are determined by search engines.
