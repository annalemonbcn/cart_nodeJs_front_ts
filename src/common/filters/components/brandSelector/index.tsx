import { useMemo } from 'react'
import { type MultiValue } from 'react-select'
import { FilterSection } from '@/common/filterSection'
import { customStyles } from './constants'
import { useGetBrands } from './hooks'
import { StyledSelect } from './styles'
import { useMultiSelectParam } from '../../hooks/useMultiSelectParam'
import type { Option } from './types'

const BrandSelector = () => {
  const options = useGetBrands()

  const { selected, write, reset } = useMultiSelectParam({
    param: 'brand',
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
    <FilterSection title="Brand" numberOfSelected={selected.length} onClear={reset}>
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
    </FilterSection>
  )
}

export { BrandSelector }
