import { expect, test } from "bun:test"
import { Direction, DirectionHelper } from "../../src/core/Direction"

test("direction rotation", () => {
  expect(DirectionHelper.rotateRight(Direction.north)).toBe(Direction.east)
  expect(DirectionHelper.rotateRight(Direction.east)).toBe(Direction.south)
  expect(DirectionHelper.rotateRight(Direction.south)).toBe(Direction.west)
  expect(DirectionHelper.rotateRight(Direction.west)).toBe(Direction.north)

  expect(DirectionHelper.rotateLeft(Direction.north)).toBe(Direction.west)
  expect(DirectionHelper.rotateLeft(Direction.west)).toBe(Direction.south)
  expect(DirectionHelper.rotateLeft(Direction.south)).toBe(Direction.east)
  expect(DirectionHelper.rotateLeft(Direction.east)).toBe(Direction.north)

  expect(DirectionHelper.rotateRight(Direction.up)).toBe(Direction.up)
  expect(DirectionHelper.rotateLeft(Direction.down)).toBe(Direction.down)
})

test("direction inversion", () => {
  expect(DirectionHelper.invert(Direction.up)).toBe(Direction.down)
  expect(DirectionHelper.invert(Direction.down)).toBe(Direction.up)
  expect(DirectionHelper.invert(Direction.north)).toBe(Direction.south)
  expect(DirectionHelper.invert(Direction.east)).toBe(Direction.west)
  expect(DirectionHelper.invert(Direction.south)).toBe(Direction.north)
  expect(DirectionHelper.invert(Direction.west)).toBe(Direction.east)
})

test("direction string conversions", () => {
  expect(DirectionHelper.fromString("north")).toBe(Direction.north)
  expect(DirectionHelper.fromString("East")).toBe(Direction.east)
  expect(DirectionHelper.fromString("DOWN")).toBe(Direction.down)
  expect(DirectionHelper.fromString(" north  ")).toBe(Direction.north)
  expect(DirectionHelper.fromString("invalid")).toBeUndefined()
})

test("direction property helpers", () => {
  expect(DirectionHelper.isHorizontal(Direction.north)).toBe(true)
  expect(DirectionHelper.isHorizontal(Direction.up)).toBe(false)
})

test("direction collection helpers", () => {
  expect(DirectionHelper.all()).toEqual([
    Direction.up,
    Direction.down,
    Direction.north,
    Direction.east,
    Direction.south,
    Direction.west,
  ])

  expect(DirectionHelper.horizontals()).toEqual([
    Direction.north,
    Direction.east,
    Direction.south,
    Direction.west,
  ])
})
