import type { Direction } from "../core/Direction"

export type EmptyState = Record<string, never>

export type FacingState = {
  facing: Direction
}

export type PoweredState = {
  isPowered: boolean
}

export type ToggleState = {
  isOn: boolean
}
