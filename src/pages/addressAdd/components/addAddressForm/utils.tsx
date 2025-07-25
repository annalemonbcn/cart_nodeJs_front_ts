import type { AddAddressFormShape } from '../../types'
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
import type { DotNestedKeys } from './types'

const wrapperMap: Record<DotNestedKeys<AddAddressFormShape>, React.FC<any>> = {
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
      const Wrapper = wrapperMap[name as DotNestedKeys<AddAddressFormShape>]

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
