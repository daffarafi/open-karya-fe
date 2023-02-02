import { ReactNode } from 'react'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  isFullWidth?: boolean
  isDisabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
}
