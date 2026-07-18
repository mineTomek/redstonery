import { LampBlockType } from "./block_types/LampBlockType"
import { LeverBlockType } from "./block_types/LeverBlockType"
import { RedstoneBlockType } from "./block_types/RedstoneBlockType"
import type { BlockRegistry } from "./BlockRegistry"

export const CoreBlockTypes = [
    new LampBlockType(),
    new LeverBlockType(),
    new RedstoneBlockType(),
]

export const DebugBlockTypes = []

export interface BlockRegistryDefaults {
  includeDebug?: boolean
}

export function registerDefaultBlockTypes(
  registry: BlockRegistry,
  options?: BlockRegistryDefaults
): void {
  for (const blockType of CoreBlockTypes) {
    registry.register(blockType)
  }

  if (options?.includeDebug) {
    for (const blockType of DebugBlockTypes) {
      registry.register(blockType)
    }
  }
}
