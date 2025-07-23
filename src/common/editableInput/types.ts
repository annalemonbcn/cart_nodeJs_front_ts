import type { Ref } from 'react'

type EditableInputProps = {
  children: React.ReactElement<{ disabled?: boolean; inputRef?: Ref<HTMLInputElement>; isEditable?: boolean }>
}

export type { EditableInputProps }
