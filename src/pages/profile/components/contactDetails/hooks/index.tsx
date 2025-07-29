import { useLoadUser } from "@/hooks/useLoadUser";
import type { ProfileFormType } from "../components/contactDetailsForm/types";

const useGetDefaultValues = (): { isLoading: boolean; data: ProfileFormType } => {
  const { data, isLoading } = useLoadUser()

  return {
    isLoading,
    data: {
      firstName: data?.payload?.firstName ?? '',
      lastName: data?.payload?.lastName ?? '',
      email: data?.payload?.email ?? '',
      phoneNumber: undefined
    }
  }
}

export { useGetDefaultValues }