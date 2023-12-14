'use client'

import { getCookie } from 'cookies-next'
import { useEffect } from 'react'

export default function Home() {
  const access_token = getCookie('access_token')

  useEffect(() => {
    console.log('access_token:', access_token)
  }, [access_token])

  return <div>Home Page</div>
}
