import { OpenKaryaLogo } from '@icons'
import Link from 'next/link'
import React from 'react'
import { socialMedia } from './constant'

export const Footer: React.FC = () => {
    return (
        <div className="w-full bg-secondary ">
            <div className="container py-7">
                <div className="flex justify-center md:justify-between items-center flex-wrap gap-4 md:gap-8 ">
                    <div className="flex gap-x-10 gap-y-4 items-center flex-wrap justify-center">
                        <div className="w-40">
                            <OpenKaryaLogo />
                        </div>
                        <p className="text-white font-medium text-center">
                            Copyright © 2023 Created with ♥ by{' '}
                            <Link
                                href={'daffarafi.netlify.app'}
                                className="text-blue-300"
                            >
                                Daffa Rafi
                            </Link>{' '}
                            - OpenKarya
                        </p>
                    </div>
                    <div className="flex gap-10 ">
                        {Object.entries(socialMedia).map(([key, property]) => (
                            <Link href={property.link} key={key}>
                                {property.logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
