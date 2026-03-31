# redstonery

An educational platform for learning redstone contraptions through interactive simulations and
lessons.

## What's inside?

This Turborepo includes the following packages and apps:

### Apps

- `web` - Main Next.js web application for the educational platform
- `labs` - React playground for testing and experimenting with the simulation engine

### Packages

- `@redstonery/simulation` - Core simulation engine for computing and simulating redstone
  contraptions
- `@redstonery/content` - Content management system for lessons, units, courses, and scene data
- `@redstonery/runtime` - Runtime layer that bridges content and simulation packages
- `@redstonery/eslint-config` - Shared ESLint configurations
- `@redstonery/typescript-config` - Shared TypeScript configurations

## Getting Started

### Prerequisites

- [Bun](https://bun.com) (recommended) or Node.js

### Installation

Install dependencies across the entire monorepo:

```bash
bun install
```

### Development

To start all development servers:

```bash
bun run dev
```

Or run specific apps/packages:

```bash
bun run dev --filter web
bun run dev --filter labs
```

### Build

To build all apps and packages:

```bash
bun run build
```

## Project Structure

- **Web App** (`apps/web`) - The main educational platform UI
- **Labs** (`apps/labs`) - Experimental playground for testing simulation features
- **Simulation** (`packages/simulation`) - Engine for redstone computation and physics
- **Content** (`packages/content`) - Structured lesson and course data
- **Runtime** (`packages/runtime`) - Orchestration layer for integrated simulation and content

## Tech Stack

- **Runtime**: [Bun](https://bun.com) or Node.js
- **Frontend**: [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- **Web Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Monorepo**: [Turborepo](https://turborepo.org)
- **Linting**: [ESLint](https://eslint.org)

## Scripts

Each app/package has its own scripts. Common ones:

- `dev` - Start development server
- `build` - Build for production
- `lint` - Run ESLint
- `type-check` - Run TypeScript type checking
