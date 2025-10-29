import { StyledSkeleton, StyledSkeletonList } from './styles'

const SkeletonLoader = ({ count = 6 }: { count?: number }) => (
  <StyledSkeletonList>
    {Array.from({ length: count }).map((_, index) => (
      <StyledSkeleton key={index} />
    ))}
  </StyledSkeletonList>
)

export default SkeletonLoader
