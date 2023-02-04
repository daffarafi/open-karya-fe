import React from 'react'
import { ButtonProps } from './interface'

export const CustomButton: React.FC<ButtonProps> = ({
    variant = 'primary',
    isFullWidth = false,
    isDisabled = false,
    onClick,
    children,
}) => {
    const getButtonStyle = () => {
        let style =
            'block px-4 py-[0.1rem] font-semibold whitespace-nowrap transition-all duration-150 '
        if (variant === 'primary') {
            style +=
                'text-primary bg-white border-2 rounded-full border-white hover:bg-primary hover:text-white '
        } else if (variant === 'secondary') {
            style +=
                'text-white border-2 rounded-full border-white hover:bg-white hover:text-primary '
        } else {
            style +=
                'text-white border-2 bg-primary rounded-full border-white hover:bg-white hover:text-primary '
        }

        if (isFullWidth) {
            style += ' w-full '
        }

        return style
    }

    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={getButtonStyle()}
        >
            {children}
        </button>
    )
}
