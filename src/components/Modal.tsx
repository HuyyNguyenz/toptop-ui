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
    window.location.reload()
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Log out TopTop</Dialog.Title>
        <Dialog.Description>Are you sure you want to log out?</Dialog.Description>
        <p>Are you sure you want to log out?</p>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
        <button onClick={() => setIsOpen(false)}>Log out</button>
      </Dialog.Panel>
    </Dialog>
  )
}

export default Modal
