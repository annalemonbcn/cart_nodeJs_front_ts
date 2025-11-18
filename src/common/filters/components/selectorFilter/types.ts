import type { CommonFilterProps } from '../../types'

type Option = {
  value: string
  label: string
  id: string
}

type SelectorFilterProps = Pick<CommonFilterProps, 'title' | 'filterName' | 'noDataText'> & {
  options: Option[]
}

export type { Option, SelectorFilterProps }
