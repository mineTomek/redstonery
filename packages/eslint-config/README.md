# ESLint Config

Shared ESLint configurations for the redstonery monorepo.

## Overview

This package provides reusable ESLint configurations to maintain consistent code quality and style
across all apps and packages.

## Available Configs

- `base` - Base ESLint configuration
- `next` - ESLint configuration for Next.js projects

## Usage

In your `eslint.config.mjs` or ESLint configuration file, extend the desired config:

```javascript
import baseConfig from "@redstonery/eslint-config/base.js"
// or
import nextConfig from "@redstonery/eslint-config/next.js"

export default [
  // ... extend the config
]
```

## Customization

Extend or override these configurations in individual apps as needed for specific project
requirements.

## See Also

- [ESLint Documentation](https://eslint.org)
