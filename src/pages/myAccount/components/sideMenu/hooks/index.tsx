import type { VerticalMenuOption } from '@/components/verticalMenu/types'
import HeartIcon from '@/icons/heart.svg?react'
import ProfileIcon from '@/icons/profile.svg?react'
import OrdersIcon from '@/icons/orders.svg?react'
import SignOutIcon from '@/icons/sign-out.svg?react'
import routes from '@/routes/routes'
import { useLocation } from 'react-router-dom'

const menuOptions = ['favourites', 'profile', 'orders', 'signOut'] as const
type MenuOption = (typeof menuOptions)[number]

const getOptionIcon = (option: MenuOption) => {
  const iconsMap: Record<MenuOption, VerticalMenuOption['icon']> = {
    favourites: HeartIcon,
    profile: ProfileIcon,
    orders: OrdersIcon,
    signOut: SignOutIcon
  }
  return iconsMap[option]
}

const useGenerateMenuOptions = () => {
  const { pathname } = useLocation()

  const options: VerticalMenuOption[] = menuOptions.map((option) => ({
    icon: getOptionIcon(option),
    path: routes[option].path,
    label: routes[option].title,
    isActive: pathname === routes[option].path
  }))

  return options
}

export { useGenerateMenuOptions }
