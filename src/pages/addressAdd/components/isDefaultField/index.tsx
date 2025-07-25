import Input from '@/components/input'
import Text from '@/components/text'
import { useFormContext } from 'react-hook-form'
import type { AddAddressFormShape } from '../../types'

const IsDefaultField = () => {
  const { register } = useFormContext<AddAddressFormShape>()

  return (
    <>
      <Text weight="medium" color="darkNeutral">
        Set as default address
      </Text>
      <Input type="checkbox" fitContent {...register('Field')} />
    </>
  )
}

export { IsDefaultField }
