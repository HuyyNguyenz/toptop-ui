import React from 'react'
import { Dialog } from '@headlessui/react'
import { deleteCookie } from 'cookies-next'

interface DialogProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const Modal = (props: DialogProps) => {
  const { isOpen, setIsOpen } = props

  const handleLogout = () => {
    deleteCookie('access_token')
    deleteCookie('refresh_token')
    setIsOpen(false)
    window.location.reload()
  }

  return (
    <>
      {isOpen ? (
        <>
          <Dialog
            className='center bg-light-color w-[25rem] text-center rounded-md p-8 animate-scale-center'
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Dialog.Panel>
              <Dialog.Title className='text-24 text-text-title-color font-bold'>
                Are you sure you want to log out?
              </Dialog.Title>
              <div className='flex items-center justify-start mt-2'>
                <button
                  className='px-12 py-3 rounded-md border-default mx-3 text-text-color font-medium'
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className='px-12 py-3 rounded-md border-default border-primary-color mx-3 text-primary-color font-medium'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </Dialog.Panel>
          </Dialog>
          <div className='overlay'></div>
        </>
      ) : null}
    </>
  )
}

export default Modal
