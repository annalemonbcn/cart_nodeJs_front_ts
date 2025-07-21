import { useForm } from 'react-hook-form'
import type { ProfileFormType } from './types'
import CustomForm from '@/components/customForm'
import TextFormField from '@/common/form/textFormField'
import EmailFormField from '@/common/form/emailFormField'
import PasswordFormField from '@/common/form/passwordFormField'
import { Separator } from '@/components/separator'
import { cloneElement, isValidElement, useEffect, useRef, useState, type Ref } from 'react'
import FlexContainer from '@/components/flexContainer'
import Button from '@/components/button'
import { StyledFormWrapper } from './styles'
import { tokens } from '@/variables/styles'

type EditableInputProps = {
  children: React.ReactElement<{ disabled?: boolean; inputRef?: Ref<HTMLInputElement> }>
}

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
        inputRef
      })
    : children

  return (
    <FlexContainer justifyContent="space-between" alignItems="center">
      {enhancedChild}
      <Button variant="text" onClick={() => setIsEdit((prev) => !prev)}>
        {isEdit ? 'Cancel' : 'Change'}
      </Button>
    </FlexContainer>
  )
}

const ContactDetailsForm = () => {
  const defaultValues: ProfileFormType = {
    firstName: 'Annaaaaa',
    lastName: 'Esteve',
    email: 'test@test.com',
    phoneNumber: '123456789',
    password: '12345678'
  }

  const methods = useForm<ProfileFormType>({ defaultValues })

  return (
    <StyledFormWrapper flexDirection="column" gap={tokens.space.xs}>
      <CustomForm methods={methods}>
        <EditableInput>
          <TextFormField<ProfileFormType>
            label="First Name"
            inputName="firstName"
            variant="secondary"
            isRequired={false}
          />
        </EditableInput>
        <Separator />

        <EditableInput>
          <TextFormField<ProfileFormType>
            label="Last Name"
            inputName="lastName"
            variant="secondary"
            isRequired={false}
          />
        </EditableInput>
        <Separator />

        <EditableInput>
          <EmailFormField<ProfileFormType> variant="secondary" isRequired={false} />
        </EditableInput>
        <Separator />

        <EditableInput>
          <TextFormField<ProfileFormType>
            label="Phone Number"
            inputName="phoneNumber"
            variant="secondary"
            isRequired={false}
          />
        </EditableInput>
        <Separator />

        <EditableInput>
          <PasswordFormField<ProfileFormType> isRequired={false} variant="secondary" showIcon={false} />
        </EditableInput>
      </CustomForm>
    </StyledFormWrapper>
  )
}

export { ContactDetailsForm }
