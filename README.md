# Fenestrator

Fenestrator uses the current GlassInformer template and the shared Plynium central-panel database.

## Portal selection

Change only the numeric `portal_id` in `app/GlassInformerSpecificData.js`:

- `1`: Glassinformer.
- `2`: Fenestrator (this repository).

The same configuration supplies branding, metadata, sector descriptions, newsletter defaults and the portal ID consumed by article, directory, event and preference services. Unknown IDs are rejected. Fenestrator does not inherit the GlassInformer signup newsletter list. Banners are limited to the selected portal and explicitly shared banners.

## Local development

Install with `npm ci`, configure the environment locally, and run `npm run dev`. Build with `npm run build` and run the production server with `npm start`.

## Vercel deployment

Import `frankgimeno3/fenestrator`, select the `main` branch and the Next.js framework preset, and leave the root directory at the repository root. Use `npm ci` for installation and `npm run build` for the build. Leave the output directory at its Next.js default.

Configure these variables in Vercel for the deployment environments that should access the panel:

- `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`, `DATABASE_USER`, `DATABASE_PASSWORD`.
- `NEXT_PUBLIC_COGNITO_REGION`, `NEXT_PUBLIC_COGNITO_DOMAIN`, `NEXT_PUBLIC_COGNITO_USER_POOL_ID`, `NEXT_PUBLIC_COGNITO_CLIENT_ID`. The existing `NEXT_PUBLIC_USER_POOL_ID` and `NEXT_PUBLIC_USER_POOL_CLIENT_ID` aliases also work.
- Server-side AWS credentials when needed by the existing Cognito administrative operations. Keep credential values in Vercel environment settings and never commit them.

The database must be reachable from the deployment. Production startup authenticates the connection but does not run Sequelize schema synchronisation; SQL migrations remain managed by `plynium_central_panel`. OAuth callbacks must include the eventual Vercel/custom domain in Cognito when using OAuth login.

The previous `MagazineTab.onlyWhenCoverAvailable` build error is removed along with the obsolete magazine/publication implementation. Advertising now uses the template's `/advertise` page; `/mediakit` redirects there. Auth confirmation pages are covered by a Suspense boundary for Next.js prerendering.

See [Vercel Next.js documentation](https://vercel.com/docs/frameworks/full-stack/nextjs) for hosting behaviour. Project instructions and architecture are in [AGENTS.md](AGENTS.md) and [docs/MAP.md](docs/MAP.md).
