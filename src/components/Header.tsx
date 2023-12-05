'use client'

import { useState } from 'react'
import Image from 'next/image'
import Search from './Search'
import Login from './auth/Login'

const Header = () => {
  const [isShowLogin, setShowLogin] = useState<boolean>(false)

  const handleShowLogin = () => {
    setShowLogin(true)
  }

  return (
    <>
      <header className='flex items-center justify-between p-4 border-b border-solid border-border-color'>
        <Image src='/logo.svg' alt='logo' width={118} height={42} priority />
        <Search />
        <button onClick={handleShowLogin}>Login</button>
      </header>
      <Login isShowLogin={isShowLogin} showLogin={setShowLogin} />
    </>
  )
}

export default Header
