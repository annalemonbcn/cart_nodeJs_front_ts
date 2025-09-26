import Text from '@/components/text'
import { useFormContext } from 'react-hook-form'
import type { AddressFormShape } from '../../types'
import { StyledCheckbox } from './styles'

const IsDefaultField = () => {
  const { register } = useFormContext<AddressFormShape>()

  return (
    <>
      <Text size="s3" weight="medium" color="darkNeutral">
        Set as default address
      </Text>
      <StyledCheckbox type="checkbox" fitContent {...register('isDefault')} />
    </>
  )
}

export { IsDefaultField }
