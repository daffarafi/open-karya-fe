import React from 'react'
import { IconProps } from './interface'

export const Ai: React.FC<IconProps> = ({
    fill = 'fill-current',
    stroke,
    className,
    size,
}) => {
    return (
        <svg viewBox="0 0 50 50" className={size}>
            <path
                d="M27.7999 0C17.3246 0 8.87773 8.19444 8.3498 18.5L3.01492 25.5278C2.34806 26.3889 3.01492 27.7778 4.18192 27.7778H8.3498V36.1111C8.3498 39.1944 10.8227 41.6667 13.907 41.6667H16.6856V50H36.1357V36.9722C42.7209 33.8611 47.25 27.2222 47.25 19.4444C47.25 8.72222 38.5808 0 27.7999 0ZM39.081 18.25L33.6349 19.6944L37.6361 23.7222C38.1027 24.1907 38.3647 24.825 38.3647 25.4861C38.3647 26.1473 38.1027 26.7815 37.6361 27.25C37.1674 27.7165 36.533 27.9784 35.8717 27.9784C35.2104 27.9784 34.576 27.7165 34.1073 27.25L30.0506 23.25L28.6335 28.6944C28.3 30.0556 26.9108 30.8333 25.6048 30.4722C25.2858 30.3909 24.9862 30.2469 24.7235 30.0486C24.4608 29.8503 24.2402 29.6017 24.0747 29.3173C23.9091 29.0328 23.8019 28.7182 23.7593 28.3919C23.7167 28.0656 23.7396 27.7341 23.8265 27.4167L25.2992 21.9444L19.8254 23.4167C19.5079 23.5056 19.1757 23.5299 18.8486 23.4882C18.5216 23.4464 18.2062 23.3395 17.9212 23.1737C17.6362 23.008 17.3874 22.7867 17.1894 22.5231C16.9915 22.2594 16.8485 21.9588 16.7689 21.6389C16.4077 20.3333 17.1857 18.9444 18.5472 18.6111L23.9932 17.1944L19.9921 13.1389C19.5741 12.6616 19.3532 12.0433 19.3742 11.4092C19.3952 10.7752 19.6565 10.1728 20.1053 9.72426C20.554 9.27568 21.1565 9.01441 21.7907 8.9934C22.4249 8.97239 23.0434 9.19321 23.5209 9.61111L27.5498 13.6111L28.9947 8.16667C29.0726 7.85447 29.2114 7.56073 29.4031 7.30228C29.5949 7.04384 29.8358 6.82578 30.112 6.66061C30.3882 6.49544 30.6943 6.38641 31.0128 6.33979C31.3312 6.29316 31.6558 6.30985 31.9678 6.38889C33.3571 6.75 34.1351 8.11111 33.8016 9.47222L32.329 14.9167L37.775 13.4444C38.098 13.3612 38.4342 13.3426 38.7644 13.3898C39.0946 13.437 39.4121 13.549 39.6988 13.7194C39.9855 13.8898 40.2356 14.1152 40.4348 14.3827C40.6339 14.6501 40.7782 14.9543 40.8593 15.2778C40.9383 15.5897 40.955 15.9141 40.9084 16.2325C40.8617 16.5509 40.7527 16.8569 40.5875 17.133C40.4222 17.4092 40.2041 17.65 39.9456 17.8417C39.6871 18.0333 39.3932 18.1721 39.081 18.25Z"
                className={fill}
            />
        </svg>
    )
}
