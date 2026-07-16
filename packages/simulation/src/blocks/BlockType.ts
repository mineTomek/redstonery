import type { BlockInstance } from "./BlockInstance"

export type BlockState = Record<string, unknown>

export interface BlockType<TId extends string, TState extends BlockState> {
  readonly id: TId

  createDefaultState(): TState

  createDefaultInstance(): BlockInstance<TId, TState>

  createInstance(state: TState): BlockInstance<TId, TState>
}

export abstract class BaseBlockType<
  TId extends string,
  TState extends BlockState,
> implements BlockType<TId, TState> {
  public abstract readonly id: TId

  public abstract createDefaultState(): TState

  public createDefaultInstance(): BlockInstance<TId, TState> {
    return this.createInstance(this.createDefaultState())
  }

  public createInstance(state: TState): BlockInstance<TId, TState> {
    return {
      typeId: this.id,
      state,
    }
  }
}
