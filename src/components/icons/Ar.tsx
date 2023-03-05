import React from 'react'
import { IconProps } from './interface'

export const Ar: React.FC<IconProps> = ({
    fill = 'fill-current',
    stroke,
    className,
    size,
}) => {
    return (
        <svg viewBox="0 0 50 50" className={size}>
            <path
                d="M4.16659 12.5C5.31242 12.5 6.24992 11.5625 6.24992 10.4167V8.33334C6.24992 7.18751 7.18742 6.25001 8.33325 6.25001H10.4166C11.5624 6.25001 12.4999 5.31251 12.4999 4.16668C12.4999 3.02084 11.5624 2.08334 10.4166 2.08334H8.33325C4.87492 2.08334 2.08325 4.87501 2.08325 8.33334V10.4167C2.08325 11.5625 3.02075 12.5 4.16659 12.5ZM10.4166 43.75H8.33325C7.18742 43.75 6.24992 42.8125 6.24992 41.6667V39.5833C6.24992 38.4375 5.31242 37.5 4.16659 37.5C3.02075 37.5 2.08325 38.4375 2.08325 39.5833V41.6667C2.08325 45.125 4.87492 47.9167 8.33325 47.9167H10.4166C11.5624 47.9167 12.4999 46.9792 12.4999 45.8333C12.4999 44.6875 11.5624 43.75 10.4166 43.75ZM41.6666 2.08334H39.5833C38.4374 2.08334 37.4999 3.02084 37.4999 4.16668C37.4999 5.31251 38.4374 6.25001 39.5833 6.25001H41.6666C42.8124 6.25001 43.7499 7.18751 43.7499 8.33334V10.4167C43.7499 11.5625 44.6874 12.5 45.8333 12.5C46.9791 12.5 47.9166 11.5625 47.9166 10.4167V8.33334C47.9166 4.87501 45.1249 2.08334 41.6666 2.08334ZM45.8333 37.5C44.6874 37.5 43.7499 38.4375 43.7499 39.5833V41.6667C43.7499 42.8125 42.8124 43.75 41.6666 43.75H39.5833C38.4374 43.75 37.4999 44.6875 37.4999 45.8333C37.4999 46.9792 38.4374 47.9167 39.5833 47.9167H41.6666C45.1249 47.9167 47.9166 45.125 47.9166 41.6667V39.5833C47.9166 38.4375 46.9791 37.5 45.8333 37.5ZM39.5833 30.9792V19.0208C39.5833 17.5208 38.7916 16.1458 37.4999 15.4167L27.0833 9.41668C26.4374 9.04168 25.7291 8.85418 24.9999 8.85418C24.2708 8.85418 23.5624 9.04168 22.9166 9.41668L12.4999 15.3958C11.2083 16.1458 10.4166 17.5208 10.4166 19.0208V30.9792C10.4166 32.4792 11.2083 33.8542 12.4999 34.5833L22.9166 40.5833C23.5624 40.9583 24.2708 41.1458 24.9999 41.1458C25.7291 41.1458 26.4374 40.9583 27.0833 40.5833L37.4999 34.5833C38.7916 33.8542 39.5833 32.4792 39.5833 30.9792ZM22.9166 35.7708L14.5833 30.9792V21.3333L22.9166 26.1875V35.7708ZM24.9999 22.5833L16.7499 17.7708L24.9999 13.0208L33.2499 17.7708L24.9999 22.5833ZM35.4166 30.9792L27.0833 35.7708V26.1875L35.4166 21.3333V30.9792Z"
                className={fill}
            />
        </svg>
    )
}
