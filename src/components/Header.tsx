'use client'

import { useState } from 'react'
import Image from 'next/image'
import Search from './Search'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between p-4 border-b border-solid border-border-color'>
        <Image src='/logo.svg' alt='logo' width={118} height={42} priority />
        <Search />
        <Link href='/login' scroll={false}>
          <button className='btn-primary py-2 px-8'>Login</button>
        </Link>
      </header>
    </>
  )
}

export default Header
