import { formFields } from './constants'
import { Separator } from '@/components/separator'
import { Fragment } from 'react/jsx-runtime'

const renderFormFields = () => (
  <>
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
  </>
)

export { renderFormFields }
