type TagVariant = 'white' | 'grey'

type TagProps = {
  text: string
  variant: TagVariant
  isActive?: boolean
  onClick?: () => void
}

export type { TagProps, TagVariant }
