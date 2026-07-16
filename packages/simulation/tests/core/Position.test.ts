import { expect, test } from "bun:test"
import { Position } from "../../src/core/Position"
import { Direction } from "../../src/core/Direction"

test("position arithmetic", () => {
  const base = new Position(1, 2, 3)

  expect(base.add(new Position(1, 1, -1))).toEqual(new Position(2, 3, 2))
  expect(base.subtract(new Position(1, 1, 1))).toEqual(new Position(0, 1, 2))
  expect(base.scale(2)).toEqual(new Position(2, 4, 6))
})

test("position movement", () => {
  const base = new Position(1, 2, 3)

  expect(base.move(Direction.north)).toEqual(new Position(1, 2, 2))
  expect(base.move(Direction.south, 2)).toEqual(new Position(1, 2, 5))
  expect(base.move(Direction.up, 5)).toEqual(new Position(1, 7, 3))
})

test("position distance", () => {
  const a = new Position(0, 0, 0)
  const b = new Position(3, 4, 0)

  expect(a.distanceTo(b)).toBe(5)
  expect(a.manhattanDistanceTo(b)).toBe(7)
})

test("position equality", () => {
  const a = new Position(0, 0, 0)
  const b = new Position(3, 4, 0)

  expect(a.equals(new Position(0, 0, 0))).toBe(true)
  expect(a.equals(b)).toBe(false)
})

test("position serialization", () => {
  const a = new Position(3, 4, 0)
  const b = new Position(0, 0, 0)

  expect(a.toString()).toBe("(3, 4, 0)")

  expect(Position.fromJSON({ x: 2, y: 4, z: 6 })).toEqual(new Position(2, 4, 6))
  expect(b.toJSON()).toEqual({ x: 0, y: 0, z: 0 })
})

test("position key", () => {
  const a = new Position(3, 4, 0)

  expect(a.toKey()).toBe("3,4,0")
  expect(Position.fromKey("3,4,0")).toEqual(a)

  expect(() => Position.fromKey("invalid")).toThrow()
  expect(() => Position.fromKey("1")).toThrow()
  expect(() => Position.fromKey("1,2")).toThrow()
  expect(() => Position.fromKey("a,b,c")).toThrow()
})
