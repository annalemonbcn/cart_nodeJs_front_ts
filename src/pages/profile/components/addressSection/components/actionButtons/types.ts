const actions = ['edit', 'delete', 'setAsDefault'] as const
type Action = (typeof actions)[number]

type ActionButton = {
  action: Action
  onClick: () => void
}

export type { ActionButton }
export { actions }
