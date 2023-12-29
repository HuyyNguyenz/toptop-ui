'use client'

import { getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { handleGetMe } from '@/apis'
import { userData } from '@/store'

export default function Home() {
  const access_token = getCookie('access_token')
  const router = useRouter()
  const [user, setUser] = useAtom(userData)

  // useEffect(() => {
  //   if (!access_token) {
  //     router.push('/login', { scroll: false })
  //   } else {
  //     !user &&
  //       handleGetMe().then((res) => {
  //         setUser(res)
  //       })
  //   }
  // }, [access_token, router, user, setUser])

  return <div>Home Page</div>
}
