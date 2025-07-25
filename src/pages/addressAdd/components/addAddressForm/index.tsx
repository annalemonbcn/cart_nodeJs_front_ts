import CustomForm from '@/components/customForm'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { AddAddressFormShape } from '../../types'
import { renderForm } from './utils'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import Button from '@/components/button'

const AddAddressForm = () => {
  const methods = useForm<AddAddressFormShape>()
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<AddAddressFormShape> = (data) => console.log(data)

  return (
    <CustomForm methods={methods}>
      {renderForm()}

      <FlexContainer alignItems="center" gap={tokens.space.xl}>
        <Button fontWeight="medium" onClick={handleSubmit(onSubmit)}>Save</Button>
        <Button variant="tertiary">Cancel</Button>
      </FlexContainer>
    </CustomForm>
  )
}

export { AddAddressForm }
