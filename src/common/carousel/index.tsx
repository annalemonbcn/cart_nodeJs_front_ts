import React, { useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { tokens, colors } from '@/variables/styles'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  initialIndex?: number
}

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

const Carousel: React.FC<CarouselProps> = ({ children, className, initialIndex = 0 }) => {
  const slides = useMemo(() => React.Children.toArray(children), [children])
  const [index, setIndex] = useState(Math.min(Math.max(initialIndex, 0), Math.max(slides.length - 1, 0)))
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState<number | null>(null)
  const [deltaX, setDeltaX] = useState(0)

  const count = slides.length
  const goTo = (i: number) => setIndex(((i % count) + count) % count) // loop safely
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (e.touches.length !== 1) return
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setDeltaX(0)
  }

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging || startX === null) return
    const currentX = e.touches[0].clientX
    setDeltaX(currentX - startX)
  }

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    if (!isDragging) return
    const threshold = 50 // px
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prev()
      } else {
        next()
      }
    }
    setIsDragging(false)
    setStartX(null)
    setDeltaX(0)
  }

  const width = viewportRef.current?.clientWidth ?? 0
  const offsetPct = isDragging && width > 0 ? (deltaX / width) * 100 : 0
  const animate = !isDragging

  if (count === 0) return null

  return (
    <Container className={className}>
      <Viewport ref={viewportRef} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <Track index={index} offsetPct={offsetPct} animate={animate}>
          {slides.map((slide, i) => (
            <Slide key={i}>{slide}</Slide>
          ))}
        </Track>
      </Viewport>

      {count > 1 && (
        <>
          <ArrowButton side="left" onClick={prev} aria-label="Previous slide">
            <img src="/icons/arrow.svg" alt="previous" />
          </ArrowButton>
          <ArrowButton side="right" onClick={next} aria-label="Next slide">
            <img src="/icons/arrow.svg" alt="next" />
          </ArrowButton>

          <Dots>
            {slides.map((_, i) => (
              <Dot key={i} active={i === index} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </Dots>
        </>
      )}
    </Container>
  )
}

export default Carousel

