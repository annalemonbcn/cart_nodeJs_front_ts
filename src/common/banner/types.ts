import type { TextColor } from '@/components/text/types'

type ButtonProps = {
  label: string
  onClick: () => void
}

type BannerContent = {
  imgSrc: string
  h1: string
  description: string
  topText?: string
}

type BannerProps = {
  textColor?: TextColor
  align?: 'left' | 'right'
}

interface IBannerProps {
  content: BannerContent
  button: ButtonProps
  bannerProps?: BannerProps
}

export type { IBannerProps, BannerProps }
