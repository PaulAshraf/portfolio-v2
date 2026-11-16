# Paul Ashraf's site

Next.js 16 (pages router, Turbopack) + Tailwind + MDX. This is Paul's personal site and the place where posts from the [engineertoairesearcher](https://github.com/PaulAshraf/engineertoairesearcher) repo get published. Read that repo's `AGENTS.md` for the thesis and research rules.

## Positioning

Paul is an AI-native engineer moving into AI safety research. The site is a tech blog where he shares what he learns. Movie reviews are kept but live only under `/films`.

## Sections

Every post sets `meta.section`. It decides where the post is listed:

| `section` | Listed on | Use for |
|---|---|---|
| `research` | `/blog`, home, RSS | AI safety research posts: replications, experiment write-ups, explainers for engineers making the same move |
| `technology` | `/blog`, home, RSS | General engineering posts |
| `film` | `/films` only | Movie reviews |

All posts are served at `/blog/<slug>` whatever their section, so old links keep working.

## Publishing a post

1. Create `src/pages/blog/<slug>.mdx`, or `src/pages/blog/<slug>/index.mdx` when it has images or other assets next to it.
2. Copy the header from an existing post: import `ArticleLayout`, export `meta`, and the default export. `meta` needs `author`, `date` (`YYYY-MM-DD`), `title`, `description`, `section`, `seoKeywords` (comma separated), `url` (same as the slug), and `logoUrl` (OG image).
3. Research posts follow the research repo's rules: state the question and the prediction made before running anything, report null results honestly, and link the code in the research repo.

## Design

Enormous headlines over generous text (18px body, 19px prose), and no rules, borders or boxes. Bricolage Grotesque (variable, optical size axis) for both display and text, IBM Plex Mono for labels, dates and code. All styles live in `src/styles/site.css` as plain CSS on semantic classes, with color tokens on `:root` and `.dark`. Page building blocks (`Section`, `Row`, `Entry`) are in `src/components/Log.jsx`.

## Commands

Node 22 (pinned in `package.json` `engines`; Vercel uses it too). The build command lives in `vercel.json`, which overrides the Vercel dashboard setting.

- `yarn dev` runs on port 3030.
- `yarn build` builds the static site into `out/` (`output: 'export'`). Production builds also regenerate the RSS feed in `public/rss/`.
- `yarn lint` runs ESLint with the Next.js flat config.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
