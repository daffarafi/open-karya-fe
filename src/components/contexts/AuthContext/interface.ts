import React, { ReactNode } from 'react'

export interface AuthContextInterface {
  user: UserInterface | null
  setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>
  loadingState: boolean
}

export interface AuthContextProviderProps {
  children: ReactNode
}

export interface UserInterface {
  id: number
  firstName: string
  lastName: string
  email: string
  description: string
  youtube: string
  github: string
  twitter: string
  instagram: string
  created_at: string
  updated_at: string
}
