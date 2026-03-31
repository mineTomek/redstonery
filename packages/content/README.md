# Content

The content management package for redstonery that handles lessons, units, courses, steps, and
scenes.

## Overview

The content package provides:

- Structured lesson and course data
- Unit and scene organization
- Step-by-step learning progression
- Content metadata and organization

This package manages the educational content structure and serves as the source of truth for all
learning material in redstonery.

## Content Structure

### Hierarchy

```
Course
  ├── Unit
  │   ├── Lesson
  │   │   ├── Scene
  │   │   │   └── Step
  │   │   └── ...
  │   └── ...
  └── ...
```

### Key Concepts

- **Course** - Top-level collection of educational material
- **Unit** - Thematic grouping of lessons within a course
- **Lesson** - Individual teaching module with multiple scenes
- **Scene** - Isolated environment or scenario demonstrating concepts
- **Step** - Atomic unit of instruction within a scene

## Features (Planned)

- [ ] Content data schemas
- [ ] Content validation
- [ ] Content loader/parser
- [ ] Metadata management
- [ ] Content versioning

## API (Planned)

### Core Functions

```typescript
// Content queries and retrieval functions will be defined here
```

## Installation

This package is part of the redstonery monorepo:

```bash
bun install
```

## Usage

See the `runtime` package for integration examples with the simulation engine.

## File Organization

```
src/
  ├── index.ts         # Main entry point
  ├── types.ts         # TypeScript type definitions
  └── data/            # Content data files (planned)
```

## Development

```bash
# Build
bun run build

# Type checking
bun run type-check

# Run tests
bun run test
```

## Content Format

Details about the content file format and schema will be documented as the package is developed.
