import styled from 'styled-components'
import { t } from '@/styles/themeHelpers'

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
  padding: ${t.space('sm')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 150ms ease-in-out;
  border-radius: ${t.borderRadius('full')};

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
  gap: ${t.space('xs')};
  margin-top: ${t.space('md')};
`

const Dot = styled.button<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: ${t.borderRadius('full')};
  background: ${(p) => (p.active ? t.color('darkNeutral') : t.color('lightNeutral'))};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 150ms ease-in-out, transform 150ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export { Container, Viewport, Track, Slide, ArrowButton, Dots, Dot }
