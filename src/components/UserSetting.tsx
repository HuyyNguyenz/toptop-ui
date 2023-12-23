import { UserType } from '@/types'
import Image from 'next/image'
import React from 'react'
import userAvatar from '@/assets/images/user_avatar.jpg'

interface UserSettingProps {
  user: UserType
}

const UserSetting = (props: UserSettingProps) => {
  const { user } = props

  return (
    <div>
      <Image
        src={user.avatar ? user.avatar : userAvatar}
        alt='user_avatar'
        width={32}
        height={32}
        className='w-[32px] h-[32px] rounded object-cover'
        priority
      />
    </div>
  )
}

export default UserSetting
