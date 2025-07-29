import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { formFields } from './constants'
import { Separator } from '@/components/separator'
import { Fragment } from 'react/jsx-runtime'

const renderFormFields = () => (
  <FlexContainer flexDirection="column" gap={tokens.space.xs}>
    {formFields.map(({ component: FieldComponent, name, label, ...rest }, index) => (
      <Fragment key={name}>
        <FieldComponent
          inputName={name}
          label={label}
          variant="secondary"
          isRequired={rest.isRequired ?? true}
          {...rest}
        />
        {index < formFields.length - 1 && <Separator />}
      </Fragment>
    ))}
  </FlexContainer>
)

export { renderFormFields }
