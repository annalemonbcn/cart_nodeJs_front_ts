import { useTheme, type DefaultTheme } from 'styled-components'
import type { StylesConfig } from 'react-select'

const makeSelectStyles = (theme: DefaultTheme): StylesConfig => ({
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? theme.colors.primary
      : state.isFocused
      ? theme.colors.lightPrimary
      : theme.colors.white,
    color: theme.colors.darkNeutral
  })
})

const useGetCustomStyles = () => {
  const theme = useTheme() as DefaultTheme

  return makeSelectStyles(theme)
}

export { makeSelectStyles, useGetCustomStyles }
