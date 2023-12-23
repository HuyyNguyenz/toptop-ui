import { UserType } from '@/types'
import React from 'react'
import UploadButton from './UploadButton'
import Notification from './Notification'
import UserSetting from './UserSetting'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

interface UserFeatureProps {
  user: UserType
}

const UserFeature = (props: UserFeatureProps) => {
  const { user } = props
  return (
    <div className='flex items-center justify-start'>
      <UploadButton />
      <div>
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
      <Notification />
      <UserSetting user={user} />
    </div>
  )
}

export default UserFeature
