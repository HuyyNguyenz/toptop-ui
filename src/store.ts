import { atom } from 'jotai'
import { UserType } from './types'

export const userData = atom<UserType | null>(null)
