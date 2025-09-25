type ButtonProps = {
  label: string
  onClick: () => void
}

interface IBannerProps {
  imgSrc: string
  h1: string
  description: string
  topText?: string
  button: ButtonProps
}

export type { IBannerProps }
