import type { VerticalMenuOption } from '@/common/menus/verticalMenu/types'
import HeartIcon from '@/icons/heart.svg?react'
import ProfileIcon from '@/icons/profile.svg?react'
import OrdersIcon from '@/icons/orders.svg?react'
import SignOutIcon from '@/icons/sign-out.svg?react'
import { useLocation } from 'react-router-dom'
import { routeMap } from '@/routes/utils'
import type { RouteName } from '@/routes/routesData'

type MenuOption = Extract<RouteName, 'wishlist' | 'orders' | 'profile' | 'signOut'>
const menuOptions = ['profile', 'orders', 'wishlist', 'signOut'] as const satisfies readonly MenuOption[]

const getOptionIcon = (option: MenuOption) => {
  const iconsMap: Record<MenuOption, VerticalMenuOption['icon']> = {
    wishlist: HeartIcon,
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
    path: routeMap[option].path,
    label: routeMap[option].title,
    isActive: pathname === routeMap[option].path
  }))

  return options
}

const useDisplayBackButton = () => {
  const options = useGenerateMenuOptions()
  const { pathname } = useLocation()

  const existsInOptions = !options.some((option) => option.path === pathname)
  return existsInOptions
}

export { useGenerateMenuOptions, useDisplayBackButton }
