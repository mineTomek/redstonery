import type { BlockRegistry } from "../blocks/BlockRegistry"
import { registerDefaultBlockTypes } from "../blocks/registryDefaults"
import type { World } from "../core/World"

export class Simulation {
  private tick = 0

  public constructor(
    private readonly world: World,
    private readonly blockRegistry: BlockRegistry
  ) {
    registerDefaultBlockTypes(this.blockRegistry)
  }

  public get currentTick(): number {
    return this.tick
  }

  public step(): void {
    // * Nothing for now

    this.tick++
  }
}
