# Web App

The main Next.js application for redstonery, the educational platform for learning redstone
contraptions.

## Overview

The web app provides the primary user interface for:

- Browsing and accessing lessons and courses
- Interactive simulation visualizations
- Progress tracking and user accounts
- Educational content management

## Getting Started

### Prerequisites

- [Bun](https://bun.com) or Node.js 18+
- Dependencies installed via `bun install` in the monorepo root

### Development

Start the development server:

```bash
bun run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Build

Build for production:

```bash
bun run build
```

Start the production server:

```bash
bun start
```

## Project Structure

```cli
app/
  ├── layout.tsx      # Root layout component
  ├── page.tsx        # Home page
  └── globals.css     # Global styles
public/               # Static assets
```

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
