import type { CommonFilterProps } from '../../types'

type SelectorOption = {
  value: string
  label: string
  id: string
}

type SelectorFilterProps = Pick<CommonFilterProps, 'title' | 'filterName' | 'noDataText'> & {
  options: SelectorOption[]
}

export type { SelectorOption, SelectorFilterProps }
