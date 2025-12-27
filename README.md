# tylervh.com

Personal website and blog.

## How it works

A custom static site generator that was vibe coded into existence. Drop HTML fragments into `posts/` with an `<h1>` and `<time>` tag, and the build script wraps them in a template and generates the musings pages. That's it.

## Development

```
npm install
npm run dev
```

Watches `src/` and `posts/` for changes and rebuilds automatically.

## Build

```
npm run build
```

Outputs static files to `build/`.

## Deployment

Hosted on Netlify. Deploys automatically from `master`.
