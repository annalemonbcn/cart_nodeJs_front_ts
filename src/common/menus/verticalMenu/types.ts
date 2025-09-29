import type { MenuOption } from '../types'

type VerticalMenuOption = MenuOption & {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export type { VerticalMenuOption }
