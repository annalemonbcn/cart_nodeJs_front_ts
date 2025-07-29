import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { capitalize } from '@/utils/string'
import Button from '@/components/button'
import Text from '@/components/text'

type ActionButton = 'edit' | 'delete' | 'setAsDefault'

const getActionButtons = (isDefault: boolean): ActionButton[] => {
  const baseActions: ActionButton[] = ['edit', 'delete']

  const extraActions: ActionButton[] = !isDefault ? ['setAsDefault'] : []

  const actionButtons: ActionButton[] = [...baseActions, ...extraActions]

  return actionButtons
}

const ActionButtons = ({ isDefault }: { isDefault: boolean }) => {
  const buttons = getActionButtons(isDefault)

  return (
    <FlexContainer alignItems="center" gap={tokens.space.sm2}>
      {buttons.map((button, idx) => (
        <>
          <Button key={`address-action-${button}`} variant="text">
            {capitalize(button)}
          </Button>
          {idx !== buttons.length - 1 && <Text color='offWhite'>|</Text>}
        </>
      ))}
    </FlexContainer>
  )
}

export { ActionButtons }
