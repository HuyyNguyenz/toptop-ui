'use client'

import { Menu } from '@headlessui/react'
import Image from 'next/image'
import userAvatar from '@/assets/images/user_avatar.jpg'
import { UserType } from '@/types'
import { faArrowRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faMoon, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Modal from './Modal'
import DarkModeButton from './DarkModeButton'

interface UserMenuProps {
  user: UserType
}

const items = [
  { href: '/profile', label: 'View profile', icon: faUser },
  { href: '/favorites', label: 'Favorites', icon: faBookmark },
  { href: '/setting', label: 'Settings', icon: faGear },
  { label: 'Dark mode', icon: faMoon },
  { label: 'Log out', icon: faArrowRightFromBracket }
]

const UserMenu = (props: UserMenuProps) => {
  const { user } = props
  const [isLogout, setIsLogout] = useState<boolean>(false)

  const handleOpenModal = () => {
    setIsLogout(true)
  }

  return (
    <div className='relative top-0 left-0'>
      <Menu>
        <div className='relative top-0 left-0'>
          <Menu.Button>
            <Image
              src={user.avatar ? user.avatar : userAvatar}
              alt='user_avatar'
              width={32}
              height={32}
              className='w-[2rem] h-[2rem] rounded object-cover mx-4 cursor-pointer'
              priority
            />
          </Menu.Button>
          <Menu.Items className='absolute top-12 right-0 bg-light-color shadow-lg rounded-md border-default w-[12.5rem] py-2'>
            {items.map((item) => (
              <Menu.Item key={item.label}>
                {({ active }) => (
                  <a
                    onClick={item.label === 'Log out' ? handleOpenModal : undefined}
                    className={`${
                      active && 'bg-hover-menu-color'
                    } flex items-center justify-start cursor-pointer py-2 px-4 ${
                      item.label === 'Log out' && 'border-t border-solid border-border-color text-text-title-color'
                    }`}
                    href={item.href}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <span className='ml-2'>{item.label}</span>
                    {item.label === 'Dark mode' ? <DarkModeButton /> : null}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </div>
      </Menu>
      <Modal isOpen={isLogout} setIsOpen={(isOpen) => setIsLogout(isOpen)} />
    </div>
  )
}

export default UserMenu
