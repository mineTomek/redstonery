# Simulation

The core simulation engine for redstonery that computes and simulates redstone contraptions.

## Overview

The simulation package provides:

- redstone physics computation and logic
- Contraption state management
- Efficient tick-based simulation
- Real-time update calculations

This is the heart of the redstonery platform, handling all simulation logic independently from UI
rendering.

## API (PLACEHOLDER)

### Core Types

```typescript
// Simulation state and components will be defined here
```

### Primary Functions

- `createSimulation()` - Initialize a new simulation
- `step()` - Execute one tick of simulation
- `getState()` - Get current simulation state
- `loadState()` - Load a saved simulation state

## Installation

This package is part of the redstonery monorepo:

```bash
bun install
```

## Development

```bash
# Run tests
bun run test

# Build
bun run build
```
