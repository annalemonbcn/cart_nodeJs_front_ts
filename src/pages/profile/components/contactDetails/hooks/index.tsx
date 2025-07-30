import { useLoadUser } from '@/hooks/useLoadUser'
import type { ProfileFormType } from '../components/contactDetailsForm/types'

const useGetDefaultValues = (): { isLoading: boolean; data: ProfileFormType } => {
  const { data, isLoading } = useLoadUser()

  return {
    isLoading,
    data: !data ? ({} as ProfileFormType) : data
  }
}

export { useGetDefaultValues }
