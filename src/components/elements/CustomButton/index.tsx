import React from 'react'
import { ButtonProps } from './interface'

export const CustomButton: React.FC<ButtonProps> = ({
    variant = 'primary',
    isFullWidth = false,
    isDisabled = false,
    onClick,
    children,
}) => {
    const getStyleByVariant = () => {
        let style = 'block px-4 py-[0.1rem] font-semibold '
        if (variant === 'primary') {
            style += 'text-primary bg-white border-2 rounded-full border-white'
        } else if (variant === 'secondary') {
            style += 'text-white border-2 rounded-full border-white'
        } else {
        }

        return style
    }

    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={getStyleByVariant()}
        >
            {children}
        </button>
    )
}
