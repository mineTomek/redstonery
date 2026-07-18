# Labs

A React playground for testing and experimenting with the redstone simulation engine without
affecting the main web application.

**This is meant for dev use only!**

## Overview

The labs app serves as a sandbox environment for:

- Testing new simulation features
- Experimenting with the rendering engine
- Prototyping UI components
- Debugging simulation behavior

This app is separate from the main web platform to allow for rapid iteration and experimentation.

## Getting Started

### Prerequisites

- [Bun](https://bun.com) (recommended)
- Dependencies installed via `bun install` in the monorepo root

### Development

Start the development server:

```bash
bun run dev
```

The labs app will be available at the configured development URL.

## Project Structure

```cli
src/
  ├── ...
  └── ...              # TBD
```

## Available Scripts

- `dev` - Start development server with hot reload
- `build` - Build optimized assets for production
- `start` - Serve a production build

## Notes

This is a development/testing application. Features here are experimental and may change rapidly.
