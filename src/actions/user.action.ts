import { UserType } from '@/types'
import fetchApi from '@/utils/fetchApi'

export const handleGetMe = async () => {
  const user = (await fetchApi.get('/users/me')).data
  return user as UserType
}
