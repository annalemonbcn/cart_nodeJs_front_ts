import { colors, tokens } from '@/variables/styles'
import styled, { css } from 'styled-components'

const trackCommonProps = css`
  height: 3px;
  border-radius: ${tokens.borders.radius.xs};
`

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: ${tokens.space.md} 0;
`

const Track = styled.div`
  position: relative;
  ${trackCommonProps}
  background-color: ${colors.mediumNeutral};
`

const ActiveRange = styled.div<{ leftPct: number; rightPct: number }>`
  position: absolute;
  left: ${({ leftPct }) => leftPct && leftPct}%;
  right: ${({ rightPct }) => rightPct && rightPct}%;
  ${trackCommonProps}
  background-color: ${colors.primary};
  pointer-events: none;
`

const RangeInput = styled.input`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: transparent;
  appearance: none;
  -webkit-appearance: none;
  pointer-events: none;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: ${tokens.space.md};
    height: ${tokens.space.md};
    border-radius: ${tokens.borders.radius.full};
    background-color: ${colors.primary};
    cursor: pointer;
    pointer-events: auto;
    position: relative;
  }

  &::-moz-range-thumb {
    width: ${tokens.space.md};
    height: ${tokens.space.md};
    border-radius: ${tokens.borders.radius.full};
    background-color: ${colors.primary};
    cursor: pointer;
    pointer-events: auto;
  }
  &::-moz-range-track {
    background-color: transparent;
  }
`

export { Wrapper, Track, ActiveRange, RangeInput }
