import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MessageBox = () => {
  return (
    <div className='mx-4 text-24 cursor-pointer'>
      <FontAwesomeIcon icon={faPaperPlane} />
    </div>
  )
}

export default MessageBox
