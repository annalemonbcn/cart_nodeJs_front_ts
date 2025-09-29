import { colors, tokens } from '@/variables/styles'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 100%;
`

const Viewport = styled.div`
  overflow: hidden;
  width: 100%;
`

const Track = styled.div<{ index: number; offsetPct: number; animate: boolean }>`
  display: flex;
  width: 100%;
  transform: translateX(${(p) => `calc(-${p.index * 100}% + ${p.offsetPct}%)`});
  transition: ${(p) => (p.animate ? 'transform 300ms ease-in-out' : 'none')};
`

const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
`

const ArrowButton = styled.button<{ side: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${(p) => (p.side === 'left' ? 'left: 0;' : 'right: 0;')}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding: ${tokens.space.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 150ms ease-in-out;
  border-radius: ${tokens.borders.radius.full};

  &:hover {
    background: rgba(255, 255, 255, 1);
  }

  img {
    width: 16px;
    height: 16px;
    ${(p) => (p.side === 'left' ? 'transform: rotate(180deg);' : '')}
  }
`

const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${tokens.space.xs};
  margin-top: ${tokens.space.md};
`

const Dot = styled.button<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: ${tokens.borders.radius.full};
  background: ${(p) => (p.active ? colors.darkNeutral : colors.lightNeutral)};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 150ms ease-in-out, transform 150ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export { Container, Viewport, Track, Slide, ArrowButton, Dots, Dot }
