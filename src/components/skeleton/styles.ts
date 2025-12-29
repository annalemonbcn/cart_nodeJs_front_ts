import styled, { css, keyframes } from 'styled-components'
import { t } from '@/styles/themeHelpers'

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`

const animationStyles = css`
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${shimmer} 1.5s infinite;
  }
`

const StyledSkeleton = styled.div`
  background-color: #e2e2e2;
  border-radius: ${t.borderRadius('sm')};
  width: 100%;
  height: 400px;

  position: relative;
  overflow: hidden;

  ${animationStyles}
`

const StyledSkeletonList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: ${t.space('lg')};
  row-gap: ${t.space('xl2')};
`

export { StyledSkeleton, StyledSkeletonList }
