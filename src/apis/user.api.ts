import { UserType } from '@/types'
import fetchApi from '@/utils/fetchApi'

export const handleGetMe = async () => {
  const user = (await fetchApi.get<UserType>('/users/me')).data
  return user
}
