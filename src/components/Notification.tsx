import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Notification = () => {
  return (
    <div className='mx-4 text-24 cursor-pointer'>
      <FontAwesomeIcon icon={faBell} />
    </div>
  )
}

export default Notification
