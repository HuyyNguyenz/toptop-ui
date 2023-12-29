import { Switch } from '@headlessui/react'
import { useState } from 'react'

const DarkModeButton = () => {
  const [enabled, setEnabled] = useState<boolean>(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-dark-mode-btn-color' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full ml-4`}
    >
      <span className='sr-only'>Enable dark mode</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}

export default DarkModeButton
