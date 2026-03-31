# TypeScript Config

Shared TypeScript configurations for the redstonery monorepo.

## Overview

This package provides reusable TypeScript configurations (`tsconfig.json`) to maintain consistent
compiler settings across all apps and packages.

## Available Configs

- `base.json` - Base TypeScript configuration
- `bun.json` - TypeScript configuration optimized for Bun runtime
- `nextjs.json` - TypeScript configuration for Next.js projects

## Usage

In your `tsconfig.json`, extend the desired config:

```json
{
  "extends": "@redstonery/typescript-config/base.json",
  "compilerOptions": {
    // Override as needed
  }
}
```

For Next.js projects:

```json
{
  "extends": "@redstonery/typescript-config/nextjs.json"
}
```

For generic Bun projects:

```json
{
  "extends": "@redstonery/typescript-config/bun.json"
}
```

## Configuration Details

Each configuration is optimized for its target runtime/framework. Check individual config files for
specific settings.

## Customization

You can override any compiler option in your project's `tsconfig.json` as needed.

## See Also

- [TypeScript Documentation](https://www.typescriptlang.org)
- [TypeScript Configuration Reference](https://www.typescriptlang.org/tsconfig)
