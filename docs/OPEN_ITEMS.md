# Open items — need input from the board / club

Carried out of the August 2026 lab-white redesign. Everything below requires
information or a decision only club members have; the site ships honest interim
states (initials fallbacks, empty-state notices, "tentative" chips) until each
item is resolved.

## People

- [ ] **Veronica Igwe headshot** — the only board member without a photo; she
      renders as "VI" initials on /about. Add `public/profiles/Veronica Igwe.png`
      and the `image` field in `src/data/eboard.ts`.
- [ ] **Verify bulk-added social links** — these were added in one commit and
      never click-verified as belonging to the right person: Eric Zhu, Veronica
      Igwe, Kacper Chojnowski, Kenneth Fluitt (LinkedIn) and Luke Slaughter
      (GitHub). John Courtney's LinkedIn was a placeholder (`john-courtney-abc123`)
      and has been removed — collect his real URL.
- [ ] **Board bios** — current bios are role descriptions duplicated between
      terms (e.g. Eric's matches Tiffany's with the tense changed). One genuine
      sentence per person would replace them; edit `src/data/eboard.ts`.

## Events (Fall 2026)

- [ ] **Confirm the Signal Processing Bootcamp** (2026-09-10) — still marked
      `tentative`, and it is the only upcoming event on the site. Flip
      `status` to `scheduled` in `src/data/events.ts` once confirmed.
- [ ] **Add the Fall 2026 calendar** — GBMs, workshops, project calls. The
      `Event` interface in `src/data/events.ts` documents the shape.
- [ ] **Fall research onboarding** — the May session is now correctly shown as
      past; add a new entry if one is planned this semester.

## Research

- [ ] **Refresh project status** — all five projects still carry the Spring
      snapshot: `lastUpdated: "2026-04-30"`, April milestones, and frozen
      progress percentages in `src/data/projects.ts`.
- [ ] **Fix the Ora repo link** — `github.com/Jibby2k1/Ora` returns 404
      (private or moved). Make it public, update the URL, or remove the link.
- [ ] **Orphaned project icons** — `public/research/` contains Ares, GH05T,
      Guru, Nano, and Sinbad icons referenced nowhere. Delete if retired, or
      supply project data if they should be listed.
- [ ] **Repo ownership** — the workshop curriculum and most project repos live
      under personal accounts (`Jibby2k1`, `matheusmaldaner`). Consider moving
      or forking to the UFSPS org before officer turnover.

## Network page

- [ ] **Member/alumni opt-ins** — `networkMembers` in `src/data/engagement.ts`
      is empty; /network shows an empty state. Collect entries (name, focus,
      links) **with consent** — the `NetworkMember` interface has a consent flag.
- [ ] **Member affiliations** — `memberAffiliations` in `src/data/chapter.ts`
      is empty (shown on /about and /network). List companies/labs members have
      consented to name.

## Branding / infra decisions

- [ ] **Masthead wording** — the navbar previously read "IEEE Student Branch"
      (a different organization); it now says "Signal Processing Society" to
      match the rest of the site. Confirm the preferred official wording.
- [ ] **Social share image** — `og:image` points at the favicon, which renders
      as a tiny blurry card when links are shared. Produce a 1200×630 graphic
      and reference it in `index.html`.
- [ ] **Deploy trigger** — `.github/workflows/deploy.yml` deploys to production
      on pushes to both `main` and `setup-github-pages`. After this branch
      merges, remove `setup-github-pages` from the trigger so only `main`
      deploys.
- [ ] **Discord invite** — `discord.gg/6GRymPjgKc` is the sole recruiting CTA
      in several places. Confirm it is a permanent, non-expiring invite that
      the 2026–2027 board monitors.
