'use client'

import Image from 'next/image'
import Search from './Search'
import Link from 'next/link'
import { userData } from '@/store'
import { useAtomValue } from 'jotai'
import UploadButton from './UploadButton'
import MessageBox from './MessageBox'
import Notification from './Notification'
import UserMenu from './UserMenu'

const Header = () => {
  const user = useAtomValue(userData)

  return (
    <>
      <header className='flex items-center justify-between p-4 border-b border-solid border-border-color'>
        <Image className='w-[7.375rem] h-[2.625rem]' src='/logo.svg' alt='logo' width={118} height={42} priority />
        <Search />
        {user ? (
          <div className='flex items-center justify-start'>
            <UploadButton />
            <MessageBox />
            <Notification />
            <UserMenu user={user} />
          </div>
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
