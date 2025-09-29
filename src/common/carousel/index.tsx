import { ArrowButton, Container, Dot, Dots, Slide, Track, Viewport } from './styles'
import type { ICarouselProps } from './types'
import React, { useMemo, useRef, useState } from 'react'

const Carousel = ({ children, initialIndex = 0 }: ICarouselProps) => {
  const slides = useMemo(() => React.Children.toArray(children), [children])
  const count = slides.length
  const [index, setIndex] = useState(Math.min(Math.max(initialIndex, 0), Math.max(count - 1, 0)))
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState<number | null>(null)
  const [startY, setStartY] = useState<number | null>(null)
  const [deltaX, setDeltaX] = useState(0)
  const [dragAxis, setDragAxis] = useState<null | 'x' | 'y'>(null)

  const goTo = (i: number) => setIndex(((i % count) + count) % count) // loop safely
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (e.touches.length !== 1) return
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setStartY(e.touches[0].clientY)
    setDeltaX(0)
    setDragAxis(null)
  }

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging || startX === null || startY === null) return
    const touch = e.touches[0]
    const currentX = touch.clientX
    const currentY = touch.clientY
    const dx = currentX - startX
    const dy = currentY - startY

    if (!dragAxis) {
      if (Math.abs(dx) > Math.abs(dy) + 5) {
        setDragAxis('x')
      } else if (Math.abs(dy) > Math.abs(dx) + 5) {
        setDragAxis('y')
      }
    }

    if (dragAxis === 'x' || (!dragAxis && Math.abs(dx) > Math.abs(dy))) {
      setDeltaX(dx)
    }
  }

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    if (!isDragging) return
    const threshold = 50
    if (dragAxis === 'x' && Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prev()
      } else {
        next()
      }
    }
    setIsDragging(false)
    setStartX(null)
    setStartY(null)
    setDeltaX(0)
    setDragAxis(null)
  }

  const width = viewportRef.current?.clientWidth ?? 0
  const offsetPct = isDragging && width > 0 ? (deltaX / width) * 100 : 0
  const animate = !isDragging

  if (count === 0) return null

  return (
    <Container>
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
