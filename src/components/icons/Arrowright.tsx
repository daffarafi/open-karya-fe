import React from 'react'
import { IconProps } from './interface'

export const Arrowright: React.FC<IconProps> = ({
    fill = 'fill-current',
    stroke,
    className,
    size,
}) => {
    return (
        <svg viewBox="0 0 5 8" className={size}>
            <path
                d="M0.945946 7.5L0 6.68333L3.10811 4L0 1.31667L0.945946 0.5L5 4L0.945946 7.5Z"
                className={fill}
            />
        </svg>
    )
}
