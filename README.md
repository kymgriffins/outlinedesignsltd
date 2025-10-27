## Architect Weldon – Portfolio Web App (Nuxt 3 + Vuetify)

A modern, responsive portfolio site for an architectural studio/creative agency. It showcases projects, blog articles, team members, testimonials, and a contact pathway, with light/dark theming and a componentized design system built on Vuetify.

### What this app does
- Presents a marketing homepage with hero, stats, portfolio highlights, services, differentiators, testimonials, FAQs, and recent news.
- Lists projects with a grid view and dedicated project detail pages.
- Publishes blog posts with a grid view and individual article pages.
- Introduces the team with roles and imagery.
- Offers sign-in/sign-up/forgot-password pages as scaffolding for future auth.
- Provides a contact page and company policy pages.

### Key features
- Nuxt 3 SPA setup (SSR disabled) for fast, app-like navigation.
- Vuetify 3 UI with first-class theming and Material Design components.
- Light/Dark theme toggle via Vuetify themes (`theme/LightTheme.ts`, `theme/DarkTheme.ts`).
- Pinia stores for projects and blogs data fetching/state.
- Mock API layer using Axios + axios-mock-adapter for local content.
- Organized, reusable Vue components for homepage and shared UI.

### Tech stack
- Nuxt 3, Vue 3, Vue Router 4
- Vuetify 3, @mdi/font
- Pinia (via `@pinia/nuxt`)
- Axios, axios-mock-adapter
- TypeScript
- Sass

### Application structure (high level)
- `pages/`
  - `index.vue`: home composition (`Homepage/*` sections)
  - `projects/index.vue`, `projects/[id].vue`
  - `blog/index.vue`, `blog/[id].vue`
  - `contact/index.vue`, `about/index.vue`, `services/index.vue`
  - `auth/signin.vue`, `auth/signup.vue`, `auth/forgot-password.vue`
  - `privacy-policy/index.vue`, `terms-conditions/index.vue`, `error/index.vue`
- `components/`
  - `Homepage/*`: banner, stats, portfolio, services (what we do), why choose, testimonials, team, pricing (optional), FAQ, recent news, get in touch
  - `projects/*` and `blogs/*`: banners, grids, details
  - `shared/*`: headings, badges, section spacers
- `layouts/`
  - `default.vue`, `blank.vue`, header/footer, light/dark toggle
- `store/`
  - `project.ts`, `blogs.ts`: Pinia stores for data grids and selection
- `_mockApis/`
  - `projects/ProjectsData.ts`, `blogs/blogsData.ts`, `mockAdapter.ts`, `index.ts`
  - Provides mock endpoints consumed by Axios (e.g., `/api/data/projects/grid`)
- `plugins/vuetify.ts`
  - Registers Vuetify, imports global styles, themes, and mock APIs
- `theme/`
  - `LightTheme.ts`, `DarkTheme.ts`
- `utils/axios.ts`

### Data flow
1. Mock APIs are registered on app startup (`plugins/vuetify.ts` imports `_mockApis`), wiring axios-mock-adapter.
2. Pinia stores call Axios endpoints (`/api/data/projects/grid`, `/api/data/blog/grid`, etc.).
3. Components consume store state to render grids, details, and homepage sections.

### Theming
- Default theme: `LIGHT_THEME` (configured in `plugins/vuetify.ts`).
- Toggle available in layout header component, switching between `LIGHT_THEME` and `DARK_THEME`.

### Run locally
```bash
pnpm install        # or: npm install / yarn install
pnpm dev            # or: npm run dev / yarn dev
```

### Build and preview
```bash
pnpm build          # or: npm run build / yarn build
pnpm preview        # or: npm run preview / yarn preview
```

### Deployment notes
- SSR is disabled (`ssr: false` in `nuxt.config.ts`), so the app runs as an SPA.
- Nitro `serveStatic: true` is enabled; you can host the generated output on static hosts.
- For traditional hosting, serve via any Node-compatible environment using `nuxt build` + `nuxt preview` or your own server.

### Customization guide
- Branding
  - Replace logos in `public/images/logos/*` and favicon in `public/favicon.ico`.
- Colors & typography
  - Adjust Vuetify theme tokens in `theme/LightTheme.ts` and `theme/DarkTheme.ts`.
- Homepage sections
  - Tweak or reorder sections in `pages/index.vue` and `components/Homepage/*`.
- Content sources
  - Update mock data in `_mockApis/*` or connect to a real API by replacing the mock adapter with actual endpoints in `utils/axios.ts`.
- SEO title
  - Edit `app.head.title` in `nuxt.config.ts`.

### License
This project is provided as a free Nuxt/Vuetify starter for portfolio/agency sites. Adapt as needed for your use case.