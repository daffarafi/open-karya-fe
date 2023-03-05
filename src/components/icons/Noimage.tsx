import React from 'react'
import { IconProps } from './interface'

export const Noimage: React.FC<IconProps> = ({
    fill = 'fill-current',
    stroke,
    className,
    size,
}) => {
    return (
        <svg viewBox="0 0 40 40" className={size}>
            <g clipPath="url(#clip0_94_4)">
                <path
                    d="M38.596 32.0101L7.9899 1.40404H34.5556C35.6667 1.40404 36.6182 1.79933 37.4101 2.5899C38.2007 3.38182 38.596 4.33333 38.596 5.44444V32.0101ZM36.1717 41L32.9394 37.7677H6.27273C5.16162 37.7677 4.2101 37.3724 3.41818 36.5818C2.62761 35.7899 2.23232 34.8384 2.23232 33.7273V7.06061L-1 3.82828L1.82828 1L39 38.1717L36.1717 41ZM8.29293 29.6869H24.8081L20.5657 25.4444L18.899 27.6667L14.3535 21.6061L8.29293 29.6869Z"
                    className={fill}
                />
            </g>
            <defs>
                <clipPath id="clip0_94_4">
                    <rect width="40" height="40" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
