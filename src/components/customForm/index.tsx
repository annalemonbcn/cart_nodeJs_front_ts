import { FormProvider } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import type { ICustomFormProps } from './types'

const CustomForm = <TFieldValues extends Record<string, unknown>>({ children, methods }: ICustomFormProps<TFieldValues>) => (
  <FormProvider {...methods}>
    {children}
    <DevTool control={methods.control} />
  </FormProvider>
)

export default CustomForm
