import type { BlockState, BlockType } from "./BlockType"

export class BlockRegistry {
  private readonly blockTypes = new Map<string, BlockType<string, BlockState>>()

  public register(type: BlockType<string, BlockState>): void {
    if (this.blockTypes.has(type.id)) {
      throw new Error(`Block type with id ${type.id} is already registered`)
    }

    this.blockTypes.set(type.id, type)
  }

  public tryGet(id: string): BlockType<string, BlockState> | undefined {
    return this.blockTypes.get(id)
  }

  public get(id: string): BlockType<string, BlockState> {
    const type = this.tryGet(id)

    if (type === undefined) {
      throw new Error(`Block type with id ${id} is not registered`)
    }

    return type
  }

  public has(id: string): boolean {
    return this.blockTypes.has(id)
  }

  public getAll(): readonly BlockType<string, BlockState>[] {
    return Array.from(this.blockTypes.values())
  }
}
