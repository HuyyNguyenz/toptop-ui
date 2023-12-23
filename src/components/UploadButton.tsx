import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const UploadButton = () => {
  return (
    <div className='flex items-center justify-start border-default py-2 px-4 rounded cursor-pointer hover:bg-bg-input-color'>
      <FontAwesomeIcon icon={faPlus} />
      <span className='text-text-title-color ml-2 font-medium'>Upload</span>
    </div>
  )
}

export default UploadButton
