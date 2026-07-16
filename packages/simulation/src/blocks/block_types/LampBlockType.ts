import type { PoweredState } from "../BlockStateFragments"
import { BaseBlockType } from "../BlockType"

export type LampState = PoweredState

export class LampBlockType extends BaseBlockType<"lamp", LampState> {
  public readonly id = "lamp" as const

  public createDefaultState(): LampState {
    return {
      isPowered: false,
    }
  }
}
