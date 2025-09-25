import type { IFlexContainerProps } from '@/components/flexContainer/types'
import type CustomForm from '..'

type StandardFormProps<TFieldValues extends Record<string, unknown>> = React.ComponentProps<
  typeof CustomForm<TFieldValues>
> & {
  gap?: IFlexContainerProps['gap']
}

export type { StandardFormProps }
