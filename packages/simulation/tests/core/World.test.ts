import { beforeEach, expect, test } from "bun:test"
import { World } from "../../src/core/World"
import { Position } from "../../src/core/Position"
import { LampBlockType } from "../../src/blocks/block_types/LampBlockType"

let testWorld: World

beforeEach(() => {
  testWorld = new World()
})

test("set and get block", () => {
  const position = new Position(1, 2, 3)
  const block = new LampBlockType().createDefaultInstance()

  testWorld.setBlock(position, block)
  const retrievedBlock = testWorld.getBlock(position)

  expect(testWorld.hasBlock(position)).toBe(true)
  expect(retrievedBlock).toEqual(block)
  expect(retrievedBlock?.typeId).toBe("lamp")
})

test("remove single block", () => {
  const position1 = new Position(4, 5, 6)
  const position2 = new Position(5, 5, 6)
  const block = new LampBlockType().createDefaultInstance()

  testWorld.setBlock(position1, block)
  testWorld.setBlock(position2, block)
  expect(testWorld.hasBlock(position1)).toBe(true)
  expect(testWorld.hasBlock(position2)).toBe(true)

  const removed = testWorld.removeBlock(position1)
  expect(removed).toBe(true)
  expect(testWorld.hasBlock(position1)).toBe(false)
  expect(testWorld.hasBlock(position2)).toBe(true)

  const failedRemoved = testWorld.removeBlock(position1)
  expect(failedRemoved).toBe(false)
})
