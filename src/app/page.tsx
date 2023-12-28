'use client'

import { getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { atom, useAtom } from 'jotai'
import { UserType } from '@/types'
import { handleGetMe } from '@/apis'

export const userData = atom<UserType | null>(null)

export default function Home() {
  const access_token = getCookie('access_token')
  const router = useRouter()
  const [user, setUser] = useAtom(userData)

  useEffect(() => {
    if (!access_token) {
      router.push('/login', { scroll: false })
    } else {
      !user &&
        handleGetMe().then((res) => {
          setUser(res)
        })
    }
  }, [access_token, router, user, setUser])

  return <div>Home Page</div>
}
