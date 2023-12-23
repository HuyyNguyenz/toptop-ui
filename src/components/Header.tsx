'use client'

import Image from 'next/image'
import Search from './Search'
import Link from 'next/link'
import { useContext } from 'react'
import UserFeature from './UserFeature'
import { UserContext } from '@/app/layout'

const Header = () => {
  const user = useContext(UserContext)
  return (
    <>
      <header className='flex items-center justify-between p-4 border-b border-solid border-border-color'>
        <Image className='w-[118px] h-[42px]' src='/logo.svg' alt='logo' width={118} height={42} priority />
        <Search />
        {user ? (
          <UserFeature user={user} />
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
