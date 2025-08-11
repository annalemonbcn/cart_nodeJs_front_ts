import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { capitalize } from '@/utils/string'
import Button from '@/components/button'
import Text from '@/components/text'
import { useGetActionButtons } from './hooks'
import Loader from '@/components/loader'

const ActionButtons = ({ id, isDefault }: { id: string; isDefault: boolean }) => {
  const { actionButtons, isPending } = useGetActionButtons(id, isDefault)

  if (isPending) return <Loader />

  return (
    <FlexContainer alignItems="center" gap={tokens.space.sm2}>
      {actionButtons.map((button, idx) => (
        <>
          <Button key={`address-action-${button.action}`} variant="text" onClick={button.onClick}>
            {capitalize(button.action)}
          </Button>
          {idx !== actionButtons.length - 1 && <Text color="offWhite">|</Text>}
        </>
      ))}
    </FlexContainer>
  )
}

export { ActionButtons }
