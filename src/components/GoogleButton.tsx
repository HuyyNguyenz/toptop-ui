'use client'

import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GoogleButton = () => {
  const handleClick = () => {}
  return (
    <button onClick={handleClick} className='login-item'>
      <FontAwesomeIcon icon={faGoogle} />
      <span className='w-full font-medium'>Continue with Google</span>
    </button>
  )
}

export default GoogleButton
