import { tokens } from '@/variables/styles'
import styled, { css } from 'styled-components'
import type { TileStyle } from './types'

const SquareStyles = css`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const RectangularStyles = css`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const StyledTile = styled.div<{ tileStyle: TileStyle }>`
  flex: 1;
  border-radius: ${tokens.borders.radius.md};
  max-width: 400px;

  ${({ tileStyle }) => tileStyle === 'square' && SquareStyles}
  ${({ tileStyle }) => tileStyle === 'rectangular' && RectangularStyles}
`

const StyledArrow = styled.img`
cursor: pointer;
`

export { StyledTile, StyledArrow }
