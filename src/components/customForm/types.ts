import type { UseFormReturn } from 'react-hook-form'
import type { PropsWithChildren } from '@/variables/types/global.types'

interface ICustomFormProps<TFieldValues extends Record<string, unknown>> extends PropsWithChildren {
  methods: UseFormReturn<TFieldValues>
}

export type { ICustomFormProps }
