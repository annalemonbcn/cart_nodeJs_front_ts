import styled, { css } from 'styled-components'
import { t } from '@/styles/themeHelpers'

const trackCommonProps = css`
  height: 3px;
  border-radius: ${t.borderRadius('xs')};
`

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: ${t.space('md')} 0;
`

const Track = styled.div`
  position: relative;
  ${trackCommonProps}
  background-color: ${t.color('mediumNeutral')};
`

const ActiveRange = styled.div<{ leftPct: number; rightPct: number }>`
  position: absolute;
  left: ${({ leftPct }) => leftPct && leftPct}%;
  right: ${({ rightPct }) => rightPct && rightPct}%;
  ${trackCommonProps}
  background-color: ${t.color('primary')};
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
    width: ${t.space('md')};
    height: ${t.space('md')};
    border-radius: ${t.borderRadius('full')};
    background-color: ${t.color('primary')};
    cursor: pointer;
    pointer-events: auto;
    position: relative;
  }

  &::-moz-range-thumb {
    width: ${t.space('md')};
    height: ${t.space('md')};
    border-radius: ${t.borderRadius('full')};
    background-color: ${t.color('primary')};
    cursor: pointer;
    pointer-events: auto;
  }
  &::-moz-range-track {
    background-color: transparent;
  }
`

export { Wrapper, Track, ActiveRange, RangeInput }
