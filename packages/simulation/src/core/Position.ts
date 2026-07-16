import { Direction } from "./Direction"

export class Position {
  constructor(
    public x: number,
    public y: number,
    public z: number
  ) {}

  static origin(): Position {
    return new Position(0, 0, 0)
  }

  add(other: Position): Position {
    return new Position(this.x + other.x, this.y + other.y, this.z + other.z)
  }

  subtract(other: Position): Position {
    return new Position(this.x - other.x, this.y - other.y, this.z - other.z)
  }

  scale(factor: number): Position {
    return new Position(this.x * factor, this.y * factor, this.z * factor)
  }

  move(direction: Direction, distance: number = 1): Position {
    const offset = Position.directionOffset(direction).scale(distance)
    return this.add(offset)
  }

  static directionOffset(direction: Direction): Position {
    switch (direction) {
      case Direction.up:
        return new Position(0, 1, 0)
      case Direction.down:
        return new Position(0, -1, 0)
      case Direction.north:
        return new Position(0, 0, -1) // North is -Z in Minecraft
      case Direction.south:
        return new Position(0, 0, 1) // South is +Z in Minecraft
      case Direction.east:
        return new Position(1, 0, 0) // East is +X in Minecraft
      case Direction.west:
        return new Position(-1, 0, 0) // West is -X in Minecraft
      default:
        return Position.origin()
    }
  }

  distanceTo(other: Position): number {
    const dx = this.x - other.x
    const dy = this.y - other.y
    const dz = this.z - other.z
    return Math.sqrt(dx * dx + dy * dy + dz * dz)
  }

  manhattanDistanceTo(other: Position): number {
    return Math.abs(this.x - other.x) + Math.abs(this.y - other.y) + Math.abs(this.z - other.z)
  }

  equals(other: Position): boolean {
    return this.x === other.x && this.y === other.y && this.z === other.z
  }

  toString(): string {
    return `(${this.x}, ${this.y}, ${this.z})`
  }

  toKey(): string {
    return `${this.x},${this.y},${this.z}`
  }

  static fromKey(key: string): Position {
    const [x, y, z] = key.split(",").map(Number)

    if (x === undefined || isNaN(x) || y === undefined || isNaN(y) || z === undefined || isNaN(z)) {
      throw new Error(`Invalid position key: ${key}`)
    }

    return new Position(x, y, z)
  }

  toJSON(): { x: number; y: number; z: number } {
    return { x: this.x, y: this.y, z: this.z }
  }

  static fromJSON(data: { x: number; y: number; z: number }): Position {
    return new Position(data.x, data.y, data.z)
  }
}
