import { colors } from '@/variables/styles'
import type { StylesConfig } from 'react-select'

const customStyles: StylesConfig = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? colors.primary : state.isFocused ? colors.lightPrimary : colors.white
  })
}

export { customStyles }
