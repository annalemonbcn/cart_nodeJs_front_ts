import CartIcon from '@/icons/cart.svg?react'
import HeartIcon from '@/icons/heart.svg?react'
import ProfileIcon from '@/icons/profile.svg?react'
import { routeMap } from '@/routes/utils'
import type { IHighlightedItem } from './types'

const getHighlights = (isMobile: boolean) => {
  const highlights: IHighlightedItem[] = [
    {
      icon: HeartIcon,
      path: routeMap.wishlist.path
    },
    {
      icon: ProfileIcon,
      path: routeMap.profile.path
    },
    {
      icon: CartIcon,
      path: routeMap.cart.path
    }
  ]

  return isMobile ? highlights.slice(1, 2) : highlights
}

export { getHighlights }
