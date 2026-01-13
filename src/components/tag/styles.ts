import styled, { css } from 'styled-components'
import { t } from '@/styles/themeHelpers'
import FlexContainer from '../flexContainer'
import type { TagProps } from './types'

const activeStyles = css`
  border: ${t.borderSize('xs')} solid ${t.color('darkNeutral')};
  background-color: ${t.color('lightPrimary')};
  font-weight: bold;
`

const greyVariantStyles = css`
  background-color: ${t.color('whiteSmoke')};
`

const whiteVariantStyles = css`
  background-color: ${t.color('white')};
  border: ${t.borderSize('xs')} solid ${t.color('lightNeutral')};
`

const getVariantStyle = (variant: TagProps['variant']) => {
  const variantStylesMap: Record<TagProps['variant'], ReturnType<typeof css>> = {
    grey: greyVariantStyles,
    white: whiteVariantStyles
  }

  return variantStylesMap[variant]
}

const StyledTag = styled(FlexContainer)<Pick<TagProps, 'variant' | 'isActive' | 'onClick'>>`
  justify-content: center;
  padding: ${t.space('sm2')} ${t.space('md')};
  border-radius: ${t.borderRadius('sm')};
  font-weight: ${t.fontWeight('medium')};

  ${({ onClick }) => !!onClick && 'cursor: pointer;'}

  ${({ variant }) => getVariantStyle(variant)};

  ${({ isActive }) => isActive && activeStyles};
`

export { StyledTag }
