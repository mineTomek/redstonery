export enum Direction {
  up = 0,
  down = 1,
  north = 2,
  east = 3,
  south = 4,
  west = 5,
}

const horizontalDirections: Direction[] = [
  Direction.north,
  Direction.east,
  Direction.south,
  Direction.west,
]

const opposites: Record<Direction, Direction> = {
  [Direction.up]: Direction.down,
  [Direction.down]: Direction.up,
  [Direction.north]: Direction.south,
  [Direction.south]: Direction.north,
  [Direction.east]: Direction.west,
  [Direction.west]: Direction.east,
}

export const DirectionHelper = {
  isHorizontal(d: Direction): boolean {
    return horizontalDirections.includes(d)
  },

  // Rotate left (counter-clockwise) in the horizontal plane
  rotateLeft(d: Direction): Direction {
    if (!this.isHorizontal(d)) return d // Up/down don't rotate

    const index = horizontalDirections.indexOf(d)

    return horizontalDirections[
      (index - 1 + horizontalDirections.length) % horizontalDirections.length
    ]!
  },

  // Rotate right (clockwise) in the horizontal plane
  rotateRight(d: Direction): Direction {
    if (!this.isHorizontal(d)) return d // Up/down don't rotate

    const index = horizontalDirections.indexOf(d)

    return horizontalDirections[(index + 1) % horizontalDirections.length]!
  },

  invert(d: Direction): Direction {
    return opposites[d]
  },

  fromString(str: string): Direction | undefined {
    const lower = str.trim().toLowerCase()

    switch (lower) {
      case "up":
        return Direction.up
      case "down":
        return Direction.down
      case "north":
        return Direction.north
      case "east":
        return Direction.east
      case "south":
        return Direction.south
      case "west":
        return Direction.west
      default:
        return undefined
    }
  },

  all(): Direction[] {
    return [
      Direction.up,
      Direction.down,
      Direction.north,
      Direction.east,
      Direction.south,
      Direction.west,
    ]
  },

  horizontals(): Direction[] {
    return [...horizontalDirections]
  },
}
