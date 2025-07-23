import { cloneElement, isValidElement, useEffect, useRef, useState } from 'react'
import type { EditableInputProps } from './types'
import FlexContainer from '@/components/flexContainer'
import Button from '@/components/button'
import { tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledEditableContainer = styled(FlexContainer)`
  & > div {
    flex: 1;
  }
`

// TODO: move to common (?)
// TODO: delete (?)
const EditableInput = ({ children }: EditableInputProps) => {
  const [isEdit, setIsEdit] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (isEdit) {
      inputRef.current?.focus()
    }
  }, [isEdit])

  const enhancedChild = isValidElement(children)
    ? cloneElement(children, {
        disabled: !isEdit,
        inputRef,
        isEditable: isEdit
      })
    : children

  return (
    <StyledEditableContainer justifyContent="space-between" alignItems="center" gap={tokens.space.lg}>
      {enhancedChild}
      <Button variant="text" onClick={() => setIsEdit((prev) => !prev)}>
        {isEdit ? 'Cancel' : 'Change'}
      </Button>
    </StyledEditableContainer>
  )
}

export { EditableInput }
