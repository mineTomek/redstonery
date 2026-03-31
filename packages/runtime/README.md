# Runtime

The runtime layer for redstonery that orchestrates the simulation and content packages.

## Overview

The runtime package acts as the glue between the simulation engine and content system by providing:

- Unified API for the web application
- Content-to-simulation mapping
- State orchestration between systems
- Data transformation and management

The runtime abstracts away the complexity of integrating with both simulation and content packages,
exposing a clean interface for applications to use.

## Architecture

```
Web App (apps/web)
      ↓
   Runtime (runtime)
      ├→ Content (content)
      └→ Simulation (simulation)
```

The runtime:

1. Fetches content from the content package
2. Initializes simulation based on content
3. Manages simulation execution
4. Updates UI with results

## Features (Planned)

- [ ] Content loading and initialization
- [ ] Simulation orchestration
- [ ] State management
- [ ] Scene rendering coordination
- [ ] Progress tracking

## API (Planned)

### Primary Functions

```typescript
// Runtime orchestration functions will be defined here
```

## Installation

This package is part of the redstonery monorepo:

```bash
bun install
```

## Usage

```typescript
// Usage examples will be added as the API stabilizes
```

## Dependencies

- `@redstonery/simulation` - Core simulation engine
- `@redstonery/content` - Content management

## Development

```bash
# Build
bun run build

# Type checking
bun run type-check

# Run tests
bun run test
```

## Integration Guide

The runtime package serves as the integration point. Applications should:

1. Import and initialize the runtime
2. Load content through the runtime
3. Execute simulation steps
4. Subscribe to state updates
5. Render results through the simulation API

More detailed integration documentation will be added as the runtime API stabilizes.
