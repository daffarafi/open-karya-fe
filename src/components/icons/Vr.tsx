import React from 'react'
import { IconProps } from './interface'

export const Vr: React.FC<IconProps> = ({
    fill = 'fill-current',
    stroke,
    className,
    size,
}) => {
    return (
        <svg viewBox="0 0 50 50" className={size}>
            <g clipPath="url(#clip0_54_79)">
                <path
                    d="M34.7333 41.1733L36.1933 40.3767L34.73 41.1767L34.7333 41.1733ZM6.78333 16.0467C6.62954 16.4547 6.64177 16.9067 6.81739 17.3058C6.99301 17.7049 7.31803 18.0193 7.72276 18.1815C8.12748 18.3437 8.57966 18.3409 8.98232 18.1736C9.38498 18.0063 9.70605 17.6879 9.87667 17.2867L6.78333 16.0467ZM40.1167 17.2867C40.1949 17.4942 40.3138 17.684 40.4663 17.845C40.6188 18.006 40.8019 18.135 41.0049 18.2243C41.2079 18.3136 41.4267 18.3616 41.6485 18.3652C41.8702 18.3689 42.0905 18.3283 42.2964 18.2458C42.5022 18.1633 42.6895 18.0405 42.8473 17.8847C43.0051 17.7288 43.1303 17.5431 43.2153 17.3382C43.3004 17.1334 43.3438 16.9137 43.3429 16.6919C43.342 16.4701 43.2968 16.2508 43.21 16.0467L40.1167 17.2867ZM46.6633 19.5533V30.7H49.9967V19.55H46.6633V19.5533ZM37.3667 40H35.56V43.3333H37.3667V40ZM14.44 40H12.6333V43.3333H14.44V40ZM3.33333 30.7V19.55H0V30.7H3.33333ZM3.29333 19.6C17.4806 15.5463 32.5194 15.5463 46.7067 19.6L47.62 16.3967C32.8358 12.1729 17.1642 12.1729 2.38 16.3967L3.29333 19.6ZM12.6333 40C10.1668 40 7.80133 39.0202 6.05724 37.2761C4.31315 35.532 3.33333 33.1665 3.33333 30.7H0C0 34.0506 1.33101 37.2639 3.70022 39.6331C6.06943 42.0023 9.28276 43.3333 12.6333 43.3333V40ZM13.8067 40.3767C13.8688 40.2629 13.9604 40.1679 14.0718 40.1016C14.1832 40.0354 14.3104 40.0003 14.44 40V43.3333C14.9089 43.3342 15.3692 43.2082 15.7724 42.9688C16.1755 42.7294 16.5097 42.3854 16.7333 41.9733L13.8067 40.3767ZM16.7333 41.9733C20.3033 35.43 29.6967 35.43 33.27 41.9733L36.1933 40.3767C31.36 31.5167 18.6367 31.5167 13.8067 40.3767L16.7333 41.9733ZM35.56 40C35.8267 40 36.0667 40.1433 36.1933 40.3767L33.27 41.9733C33.4936 42.3854 33.8245 42.7294 34.2276 42.9688C34.6308 43.2082 35.0911 43.3342 35.56 43.3333V40ZM46.6667 30.7C46.6667 33.1665 45.6868 35.532 43.9428 37.2761C42.1987 39.0202 39.8332 40 37.3667 40V43.3333C40.7172 43.3333 43.9306 42.0023 46.2998 39.6331C48.669 37.2639 50 34.0506 50 30.7H46.6667ZM50 19.55C49.9998 18.8372 49.7674 18.1438 49.338 17.5748C48.9086 17.0058 48.3055 16.5923 47.62 16.3967L46.7067 19.6C46.6955 19.5971 46.6855 19.5907 46.6783 19.5817C46.6711 19.5726 46.667 19.5615 46.6667 19.55H50ZM3.33333 19.55C3.33298 19.5615 3.32888 19.5726 3.32167 19.5817C3.31446 19.5907 3.30451 19.5971 3.29333 19.6L2.38 16.3967C1.69507 16.5921 1.09237 17.0085 0.662993 17.5768C0.233614 18.1451 0.000892325 18.8377 0 19.55H3.33333ZM8.44 11.9067L6.78333 16.0467L9.87667 17.2867L11.5367 13.1433L8.44 11.9067ZM38.4633 13.14L40.12 17.2867L43.21 16.0467L41.5567 11.9067L38.4633 13.14ZM16.18 9.99999H33.82V6.66666H16.18V9.99999ZM41.5567 11.9067C40.9384 10.3601 39.8709 9.03428 38.4919 8.10027C37.1128 7.16626 35.4856 6.66691 33.82 6.66666V9.99999C34.8195 9.99982 35.7961 10.2992 36.6238 10.8595C37.4514 11.4198 38.0922 12.2153 38.4633 13.1433L41.5567 11.9067ZM11.5367 13.14C11.9083 12.2126 12.5493 11.4178 13.3769 10.8581C14.2046 10.2985 15.1809 9.99956 16.18 9.99999V6.66666C14.5144 6.66691 12.8872 7.16626 11.5081 8.10027C10.1291 9.03428 9.05826 10.3601 8.44 11.9067L11.5367 13.14Z"
                    className={fill}
                />
            </g>
            <defs>
                <clipPath id="clip0_54_79">
                    <rect width="50" height="50" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
