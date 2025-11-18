import { useMemo } from 'react'
import { type MultiValue } from 'react-select'
import { FilterSection } from '@/common/filterSection'
import Text from '@/components/text'
import { customStyles } from './constants'
import { StyledSelect } from './styles'
import { useMultiSelectParam } from '../../hooks/useMultiSelectParam'
import type { Option } from './types'
import type { SelectorFilterProps } from './types'

const SelectorFilter = ({ options, title, filterName, noDataText }: SelectorFilterProps) => {
  const { selected, write, reset } = useMultiSelectParam({
    param: filterName,
    allKey: null,
    defaultCsv: ''
  })

  const value = useMemo(
    () => options.filter((option) => selected.includes(String(option.value).toLowerCase())),
    [options, selected]
  )

  const onChange = (value: MultiValue<Option> | null) => {
    if (!value || value.length === 0) {
      write([])
      return
    }

    const list = value.map((option) => String(option.value))
    write(list)
  }

  return (
    <FilterSection {...{ title, numberOfSelected: selected.length, onClear: reset }}>
      {options.length === 0 && <Text size="s3">{noDataText}</Text>}

      {options.length > 0 && (
        <StyledSelect
          isMulti
          options={options}
          styles={customStyles}
          value={value}
          onChange={(option) => onChange(option as MultiValue<Option>)}
          closeMenuOnSelect={false}
          isClearable
          hideSelectedOptions={false}
        />
      )}
    </FilterSection>
  )
}

export { SelectorFilter }
