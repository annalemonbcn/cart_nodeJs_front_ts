import { colors, tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledAddressContainer = styled.div`
  background-color: ${colors.whiteSmoke};
  padding: ${tokens.space.lg} ${tokens.space.xl2};
  border-radius: ${tokens.borders.radius.md};

  display: grid;
  grid-template-areas:
    'name'
    'phoneNumber'
    'address'
    'tags'
    'actions';
  gap: ${tokens.space.md};
`

const NameArea = styled.div`
  grid-area: name;
`

const PhoneNumberArea = styled.div`
  grid-area: phoneNumber;
`

const AddressArea = styled.div`
  grid-area: address;
`

const TagsArea = styled.div`
  grid-area: tags;
`

const ActionsArea = styled.div`
  grid-area: actions;
`

export { StyledAddressContainer, NameArea, PhoneNumberArea, AddressArea, TagsArea, ActionsArea }
