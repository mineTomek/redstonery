import type { EmptyState } from "../BlockStateFragments"
import { BaseBlockType } from "../BlockType"

export class RedstoneBlockType extends BaseBlockType<"redstone_block", EmptyState> {
  public readonly id = "redstone_block" as const

  public createDefaultState(): EmptyState {
    return {}
  }
}
