import type CustomForm from '..'
import type { IFlexContainerProps } from '@/components/flexContainer/types'

type StandardFormProps<TFieldValues extends Record<string, unknown>> = React.ComponentProps<
  typeof CustomForm<TFieldValues>
> & {
  gap?: IFlexContainerProps['gap']
}

export type { StandardFormProps }
