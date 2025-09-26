import { noop } from '@tanstack/react-query'
import { formFields } from './constants'
import {
  AdditionalInfo,
  City,
  Country,
  FirstName,
  FormWrapper,
  IsDefault,
  LastName,
  PhoneNumber,
  Province,
  StreetAddress,
  Tags,
  ZipCode
} from './styles'
import type { AddressFormShape, DotNestedKeys } from './types'

const wrapperMap: Record<DotNestedKeys<AddressFormShape>, React.FC<any>> = {
  id: noop,
  firstName: FirstName,
  lastName: LastName,
  'deliveryAddress.street': StreetAddress,
  'deliveryAddress.additionalInfo': AdditionalInfo,
  'deliveryAddress.zipCode': ZipCode,
  'deliveryAddress.city': City,
  'deliveryAddress.province': Province,
  'deliveryAddress.country': Country,
  phoneNumber: PhoneNumber,
  isDefault: IsDefault,
  tags: Tags
}

const renderForm = () => (
  <FormWrapper>
    {formFields.map(({ component: FieldComponent, name, label, ...rest }) => {
      const Wrapper = wrapperMap[name as DotNestedKeys<AddressFormShape>]

      return (
        <Wrapper key={name}>
          <FieldComponent
            inputName={name}
            label={label}
            variant="tertiary"
            isRequired={rest.isRequired ?? false}
            {...rest}
          />
        </Wrapper>
      )
    })}
  </FormWrapper>
)

export { renderForm }
