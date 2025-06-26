import type { PropsWithChildren } from 'react'
import type { UseFormReturn } from 'react-hook-form'

interface ICustomFormProps<TFieldValues extends Record<string, unknown>> extends PropsWithChildren {
  methods: UseFormReturn<TFieldValues>
}

export type { ICustomFormProps }
