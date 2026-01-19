type MenuOption = {
  path: string
  label: string
  isActive: boolean
}

type ProfileMenuItem = MenuOption & {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

type ProfileMenuProps = {
  options: ProfileMenuItem[]
}

export type { ProfileMenuProps, ProfileMenuItem }
