import{c as n}from"./createLucideIcon-7sUJNctE.js";const a=[{title:"Getting Started with TanStack Start",date:"2026-01-15",summary:"A hands-on introduction to TanStack Start — the full-stack React framework that brings type-safe routing, server functions, and edge-ready deployment to modern web apps.",tags:["TanStack","React","TypeScript"],author:"Your Name",image:"/images/blog/getting-started-with-tanstack.svg",imageAlt:"Getting Started with TanStack Start",content:`## What is TanStack Start?

TanStack Start is a full-stack React framework built on top of TanStack Router. It brings together file-based routing, server functions, and first-class TypeScript support into one cohesive toolkit.

Unlike other frameworks, TanStack Start treats your router as the single source of truth — routes are fully typed end-to-end, meaning your params, search params, and loader data are all inferred automatically.

## Key Features

- **File-based routing** — drop a file in \`src/routes/\` and get a route
- **Server functions** — call backend logic directly from components with \`createServerFn\`
- **Type-safe everything** — params, loaders, and server responses are all inferred
- **Vite-powered** — fast dev server and optimized production builds

## Project Structure

\`\`\`
src/
  routes/
    __root.tsx    # Root layout
    index.tsx     # /
    about.tsx     # /about
    blog/
      $slug.tsx   # /blog/:slug
  components/
  lib/
\`\`\`

## Your First Route

Create \`src/routes/hello.tsx\`:

\`\`\`tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hello')({
  component: () => <h1>Hello from TanStack Start!</h1>,
})
\`\`\`

That's it — the route is automatically registered and fully typed.

## Server Functions

Server functions let you run Node.js code on the server and call it from any component:

\`\`\`ts
import { createServerFn } from '@tanstack/start'

export const getUser = createServerFn()
  .validator(z.string())
  .handler(async ({ data: id }) => {
    return db.users.findOne(id)
  })
\`\`\`

## Deploying to Netlify

TanStack Start ships a Netlify plugin that handles SSR, edge functions, and static assets automatically. Just add \`@netlify/vite-plugin-tanstack-start\` to your Vite config and push to Netlify.

## What's Next

- Explore [loaders](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading) for server-side data fetching
- Add [Content Collections](https://www.content-collections.dev/) for markdown-based content
- Set up [Netlify Database](https://docs.netlify.com/database/) for persistent storage`,_meta:{filePath:"getting-started-with-tanstack.md",fileName:"getting-started-with-tanstack.md",directory:".",extension:"md",path:"getting-started-with-tanstack"}},{title:"What's New in React 19",date:"2026-02-10",summary:"React 19 is a major release packed with new primitives: Actions for async mutations, the use() hook for reading promises in render, and improved Server Components integration.",tags:["React","JavaScript","Frontend"],author:"Your Name",image:"/images/blog/react-19-features.svg",imageAlt:"React 19 features overview",content:`## React 19 Is Here

After years of preview builds and RFCs, React 19 is the official stable release of React's biggest architectural shift since hooks. This post covers the headline features and how to start using them today.

## Actions

The most practical new feature is **Actions** — a way to handle async mutations with built-in pending state, optimistic updates, and error handling.

\`\`\`tsx
function SubmitButton() {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() =>
        startTransition(async () => {
          await saveData(formData)
        })
      }
      disabled={isPending}
    >
      {isPending ? 'Saving...' : 'Save'}
    </button>
  )
}
\`\`\`

New hooks built on top of Actions:

- \`useActionState\` — manage the result and pending state of a form action
- \`useOptimistic\` — display a temporary optimistic value during a mutation
- \`useFormStatus\` — read the pending state of a parent form

## The \`use()\` Hook

\`use()\` is a new primitive that lets you read a resource — like a Promise or a Context — during render:

\`\`\`tsx
function UserProfile({ userPromise }) {
  const user = use(userPromise) // suspends until resolved
  return <h1>{user.name}</h1>
}
\`\`\`

Unlike \`useEffect\` + state, \`use()\` integrates naturally with Suspense, making async data a first-class rendering concept.

## Server Components (Stable)

React 19 ships stable Server Components for frameworks that support them. Server Components run only on the server — they can read from a database, access secrets, and return JSX without any client-side JavaScript.

\`\`\`tsx
// This component never ships JS to the browser
async function ProductList() {
  const products = await db.products.findAll()
  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  )
}
\`\`\`

## Ref as a Prop

No more \`forwardRef\`! In React 19 you can pass \`ref\` directly as a prop:

\`\`\`tsx
function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />
}
\`\`\`

## Upgrading

React 19 ships with a codemod to handle most breaking changes automatically:

\`\`\`bash
npx codemod@latest react/19/migration-recipe
\`\`\`

Run it, check the output, and you're likely done in minutes for most apps.`,_meta:{filePath:"react-19-features.md",fileName:"react-19-features.md",directory:".",extension:"md",path:"react-19-features"}},{title:"Tailwind CSS v4: A Complete Guide",date:"2026-02-01",summary:"Tailwind CSS v4 rewrites the engine in Rust and moves to a CSS-first configuration model — no more tailwind.config.js. Here's everything you need to know.",tags:["CSS","Tailwind","Frontend"],author:"Your Name",image:"/images/blog/tailwind-v4.svg",imageAlt:"Tailwind CSS v4 guide",content:`## What Changed in v4?

Tailwind CSS v4 is a ground-up rewrite focused on two things: **speed** and **simplicity**. The JavaScript config file is gone — everything moves to CSS.

## CSS-First Configuration

Instead of \`tailwind.config.js\`, you configure Tailwind directly in your CSS:

\`\`\`css
@import "tailwindcss";

@theme {
  --color-brand: oklch(0.6 0.2 250);
  --font-display: 'Inter', sans-serif;
  --radius-lg: 12px;
}
\`\`\`

Every \`@theme\` variable becomes a utility class automatically:

\`\`\`html
<div class="bg-brand font-display rounded-lg">...</div>
\`\`\`

## Lightning-Fast Engine

Tailwind v4 uses **Oxide**, a Rust-based engine. In a large project with thousands of classes, builds that previously took several seconds now finish in milliseconds. Incremental builds are nearly instant.

## New Features

### \`@plugin\` Directive

Register plugins directly in CSS:

\`\`\`css
@plugin "tailwindcss-animate";
@plugin "@tailwindcss/typography";
\`\`\`

### Container Queries

First-class container query support, no plugin needed:

\`\`\`html
<div class="@container">
  <p class="@lg:text-xl">Scales with the container, not the viewport</p>
</div>
\`\`\`

### 3D Transform Utilities

\`\`\`html
<div class="rotate-x-12 perspective-500 transform-3d">...</div>
\`\`\`

### oklch Colors

The default color palette now uses oklch — a perceptually uniform color space that gives you more vivid colors with better contrast predictability.

## Migrating from v3

The Tailwind team ships an official migration tool:

\`\`\`bash
npx @tailwindcss/upgrade
\`\`\`

Most projects migrate in minutes. The biggest change is moving your \`content\` configuration — v4 scans your source files automatically, so you rarely need to configure it at all.

## Should You Upgrade?

If you're starting a new project: yes, use v4. The CSS-first model is cleaner and the speed improvements are significant.

For existing projects: the migration tool handles most cases, but audit your custom theme tokens carefully — the variable naming convention changed from \`colors.brand.500\` to \`--color-brand-500\`.`,_meta:{filePath:"tailwind-css-v4-guide.md",fileName:"tailwind-css-v4-guide.md",directory:".",extension:"md",path:"tailwind-css-v4-guide"}}];const t=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],i=n("calendar",t);export{i as C,a};
