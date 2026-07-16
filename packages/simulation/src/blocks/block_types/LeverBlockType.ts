import { Direction } from "../../core/Direction"
import type { FacingState, ToggleState } from "../BlockStateFragments"
import { BaseBlockType } from "../BlockType"

export type LeverState = FacingState & ToggleState

export class LeverBlockType extends BaseBlockType<"lever", LeverState> {
  public readonly id = "lever" as const

  public createDefaultState(): LeverState {
    return {
      facing: Direction.north,
      isOn: false,
    }
  }
}
