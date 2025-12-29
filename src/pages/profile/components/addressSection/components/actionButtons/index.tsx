import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { useGetActionButtons } from './hooks'

const ActionButtons = ({ id, isDefault }: { id: string; isDefault: boolean }) => {
  const { actionButtons, isPending } = useGetActionButtons(id, isDefault)

  return (
    <FlexContainer alignItems="center" gap="sm2">
      {actionButtons.map((button, idx) => (
        <>
          <Button key={`address-action-${button.action}`} variant="text" onClick={button.onClick} disabled={isPending}>
            {button.label}
          </Button>
          {idx !== actionButtons.length - 1 && <Text color="offWhite">|</Text>}
        </>
      ))}
    </FlexContainer>
  )
}

export { ActionButtons }
