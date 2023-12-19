'use client'

import Image from 'next/image'
import Search from './Search'
import Link from 'next/link'
import { UserType } from '@/types'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { handleGetMe } from '@/actions'
import useSWR from 'swr'
import { deleteCookie } from 'cookies-next'

const Header = () => {
  const router = useRouter()
  const path = usePathname()
  const { data, error } = useSWR('/users/me', handleGetMe, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })

  useEffect(() => {
    if (error) {
      router.push('/login', { scroll: false })
    }
  }, [error, router])

  if (path === '/verify-email') return null

  const handleLogout = () => {
    deleteCookie('access_token')
    deleteCookie('refresh_token')
    router.push('/login', { scroll: false })
  }

  return (
    <>
      <header className='flex items-center justify-between p-4 border-b border-solid border-border-color'>
        <Image className='w-[118px] h-[42px]' src='/logo.svg' alt='logo' width={118} height={42} priority />
        <Search />
        {data ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link href='/login' scroll={false}>
            <button className='btn-primary py-2 px-8'>Login</button>
          </Link>
        )}
      </header>
    </>
  )
}

export default Header
