import styled, { css } from 'styled-components'
import { media, t } from '@/styles/themeHelpers'

const responsiveStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${t.space('md')};
`

const responsiveStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.space.md};
`

const FormWrapper = styled.div`
  ${responsiveStyles};

  ${media.desktop(css`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr auto;
    gap: ${t.space('xl2')};
    grid-template-areas:
      'firstName lastName'
      'streetAddress additionalInfo'
      'zipCode city'
      'province country'
      'phoneNumber tags'
      'isDefault .';
  `)}
`

const FirstName = styled.div`
  grid-area: firstName;
`

const LastName = styled.div`
  grid-area: lastName;
`

const StreetAddress = styled.div`
  grid-area: streetAddress;
`

const AdditionalInfo = styled.div`
  grid-area: additionalInfo;
`

const ZipCode = styled.div`
  grid-area: zipCode;
`

const City = styled.div`
  grid-area: city;
`

const Province = styled.div`
  grid-area: province;
`

const Country = styled.div`
  grid-area: country;
`

const PhoneNumber = styled.div`
  grid-area: phoneNumber;
`

const IsDefault = styled.div`
  grid-area: isDefault;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${t.space('sm')};
`

const Tags = styled.div`
  grid-area: tags;
`

export {
  FormWrapper,
  FirstName,
  LastName,
  StreetAddress,
  AdditionalInfo,
  ZipCode,
  City,
  Province,
  Country,
  PhoneNumber,
  IsDefault,
  Tags
}
