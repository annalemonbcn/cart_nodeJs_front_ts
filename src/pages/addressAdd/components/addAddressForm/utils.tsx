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
  ZipCode
} from './styles'

type DotNestedKeys<T> = {
  [K in keyof T & string]: T[K] extends object ? (T[K] extends Array<any> ? K : `${K}.${DotNestedKeys<T[K]>}`) : K
}[keyof T & string]

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
  tags: () => <div>TODO</div>
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
