import type { BlockState } from "./BlockType"

export type AnyBlockInstance = BlockInstance<string, BlockState>

export type BlockInstance<TId extends string, TState extends BlockState> = {
  typeId: TId
  state: TState
}
