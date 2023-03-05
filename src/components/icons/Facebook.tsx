import React from 'react'
import { IconProps } from './interface'

export const Facebook: React.FC<IconProps> = ({
    fill = 'fill-current',
    stroke,
    className,
    size,
}) => {
    return (
        <svg viewBox="0 0 50 50" className={size}>
            <g clipPath="url(#clip0_107_24)">
                <path
                    d="M50 25.0627C50 11.2281 38.8 0 25 0C11.2 0 0 11.2281 0 25.0627C0 37.193 8.6 47.2932 20 49.6241V32.5815H15V25.0627H20V18.797C20 13.9599 23.925 10.0251 28.75 10.0251H35V17.5439H30C28.625 17.5439 27.5 18.6717 27.5 20.0501V25.0627H35V32.5815H27.5V50C40.125 48.7469 50 38.0702 50 25.0627Z"
                    className={fill}
                />
            </g>
            <defs>
                <clipPath id="clip0_107_24">
                    <rect width="50" height="50" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
