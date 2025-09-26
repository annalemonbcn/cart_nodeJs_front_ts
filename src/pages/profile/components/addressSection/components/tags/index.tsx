import FlexContainer from '@/components/flexContainer'
import { capitalize } from '@/utils/string'
import { tokens } from '@/variables/styles'
import { StyledTag } from './styles'

const Tag = ({ label }: { label: string }) => (
  <StyledTag variant="secondary" fitContent>
    {label}
  </StyledTag>
)

const Tags = ({ isDefault, tags }: { isDefault: boolean; tags?: string[] }) => (
  <FlexContainer gap={tokens.space.sm}>
    {isDefault && <Tag label="Default" />}
    {tags?.map((tag) => (
      <Tag key={`address-${tag}`} label={capitalize(tag)} />
    ))}
  </FlexContainer>
)

export { Tags }
