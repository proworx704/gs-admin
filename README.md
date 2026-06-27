# G&S Exteriors Admin App

Admin dashboard for G&S Exteriors — manage services, reviews, service areas, and site settings.

## Stack

- **Frontend:** React 19 + Vite + Tailwind CSS + shadcn/ui
- **Backend:** Convex (BaaS) with auth
- **Hosting:** Vercel

## Deployed At

- **Production:** [gs-admin-proworx704s-projects.vercel.app](https://gs-admin-proworx704s-projects.vercel.app)
- **Convex Dashboard:** [intent-ostrich-239.convex.cloud](https://dashboard.convex.dev)

## Project Structure

```
├── convex/           # Convex backend (schema, functions, auth)
│   ├── schema.ts     # Database schema
│   ├── auth.ts       # Authentication config
│   ├── services.ts   # Services CRUD
│   ├── reviews.ts    # Reviews CRUD
│   ├── serviceAreas.ts
│   ├── siteSettings.ts
│   └── users.ts
└── src/              # Frontend (pre-built)
    ├── index.html
    ├── favicon.png
    └── assets/
```
