import CustomForm from '@/components/customForm'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { AddAddressFormShape } from '../../types'
import { renderForm } from './utils'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import Button from '@/components/button'
import { useAddressServices, type SampleAddress } from '@/services/address'
import { useMutation } from '@tanstack/react-query'

const AddAddressForm = () => {
  const methods = useForm<AddAddressFormShape>({
    defaultValues: {
      firstName: '',
      lastName: '',
      deliveryAddress: {
        street: '',
        zipCode: '',
        city: '',
        province: '',
        country: '',
        additionalInfo: ''
      },
      phoneNumber: '',
      isDefault: false,
      tags: ''
    }
  })
  const { handleSubmit } = methods

  const { addAddress } = useAddressServices()

  const { mutate } = useMutation(addAddress())

  const onSubmit: SubmitHandler<AddAddressFormShape> = (data) => {
    const convertedData = {
      ...data,
      tags: data.tags?.split(',').map((tag) => tag.trim()),
      user: '6866924897deb033bba8e284'
    }
    mutate(convertedData as SampleAddress)
  }

  return (
    <CustomForm methods={methods}>
      {renderForm()}

      <FlexContainer alignItems="center" gap={tokens.space.xl}>
        <Button fontWeight="medium" onClick={handleSubmit(onSubmit)}>
          Save
        </Button>
        <Button variant="tertiary">Cancel</Button>
      </FlexContainer>
    </CustomForm>
  )
}

export { AddAddressForm }
