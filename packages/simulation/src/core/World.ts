import type { AnyBlockInstance, BlockInstance } from "../blocks/BlockInstance"
import type { BlockState, BlockType } from "../blocks/BlockType"
import type { Position } from "./Position"

export class World {
  private readonly blocks = new Map<string, AnyBlockInstance>()

  public getBlock(position: Position): AnyBlockInstance | undefined {
    return this.blocks.get(position.toKey())
  }

  public getBlockOfType<TId extends string, TState extends BlockState>(
    position: Position,
    blockType: BlockType<TId, TState>
  ): BlockInstance<TId, TState> | undefined {
    const block = this.blocks.get(position.toKey())

    if (block === undefined) return undefined

    if (block.typeId !== blockType.id) {
      throw new Error(`Block at position ${position} is not of expected type ${blockType.id}`)
    }

    return block as BlockInstance<TId, TState>
  }

  public isBlockInstanceOfType<TId extends string, TState extends BlockState>(
    block: AnyBlockInstance,
    blockType: BlockType<TId, TState>
  ): block is BlockInstance<TId, TState> {
    return block.typeId === blockType.id
  }

  public setBlock<TId extends string, TState extends BlockState>(
    position: Position,
    block: BlockInstance<TId, TState>
  ): void {
    this.blocks.set(position.toKey(), block)
  }

  public removeBlock(position: Position): boolean {
    return this.blocks.delete(position.toKey())
  }

  public hasBlock(position: Position): boolean {
    return this.blocks.has(position.toKey())
  }
}
