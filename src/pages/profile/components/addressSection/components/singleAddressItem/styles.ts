import styled from 'styled-components'
import { t } from '@/styles/themeHelpers'

const StyledAddressContainer = styled.div`
  background-color: ${t.color('whiteSmoke')};
  padding: ${t.space('lg')} ${t.space('xl2')};
  border-radius: ${t.borderRadius('md')};

  display: grid;
  grid-template-areas:
    'name'
    'phoneNumber'
    'address'
    'tags'
    'actions';
  gap: ${t.space('md')};
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
