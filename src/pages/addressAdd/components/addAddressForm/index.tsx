import CustomForm from '@/components/customForm'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { AddAddressFormShape } from '../../types'
import { renderForm } from './utils'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import Button from '@/components/button'
import { defaultValues } from './constants'
import { useAddAddress } from '../../hooks'
import type { AddressInputDto } from '@/services/address/types'
import { useGetAddress } from '@/hooks/useGetAddress'
import { toast } from 'sonner'
import { validateUserAddresses } from './validations'

const AddAddressForm = () => {
  const methods = useForm<AddAddressFormShape>({
    defaultValues
  })
  const { handleSubmit } = methods

  const { mutate, isPending } = useAddAddress()

  const { data: addresses } = useGetAddress()

  const onSubmit: SubmitHandler<AddAddressFormShape> = (data) => {
    const errorMessage = validateUserAddresses(data, addresses)
    if (errorMessage) {
      toast.error(errorMessage)
      return
    }

    const convertedData: AddressInputDto = {
      ...data,
      tags: !data.tags ? undefined : data.tags?.split(',').map((tag) => tag.trim())
    }
    mutate(convertedData)
  }

  return (
    <CustomForm methods={methods}>
      {renderForm()}

      <FlexContainer alignItems="center" gap={tokens.space.xl}>
        <Button fontWeight="medium" onClick={handleSubmit(onSubmit)} disabled={isPending}>
          Save
        </Button>
        <Button variant="tertiary">Cancel</Button>
      </FlexContainer>
    </CustomForm>
  )
}

export { AddAddressForm }
