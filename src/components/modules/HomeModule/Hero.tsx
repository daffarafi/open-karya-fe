import Image from 'next/image'
import React from 'react'
import { CustomButton } from '@elements'
import Link from 'next/link'
import { Arrowright } from '@icons'

export const Hero: React.FC = () => (
    <header className="w-full flex items-center">
        <div className="w-full h-screen max-h-[720px]  bg-gray-200 relative">
            <Image
                src={'/hero_image_1.jpg'}
                alt="hero image"
                className="object-cover object-center brightness-50"
                fill
            />
        </div>
        <div className="absolute w-full">
            <div className="container flex gap-6 flex-col">
                <h1 className="text-white">
                    Bergabung dan bagikan <br />
                    karya terbaik anda
                </h1>
                <div className="flex items-center gap-7 justify-center md:justify-start">
                    <Link href={'/auth/signup'}>
                        <CustomButton variant="primary">BERGABUNG</CustomButton>
                    </Link>
                    <Link
                        href={'/karya'}
                        className="flex items-center gap-3 group"
                    >
                        <span className="text-white font-semibold group-hover:mr-3 transition-all">
                            LIHAT KARYA
                        </span>
                        <Arrowright />
                    </Link>
                </div>
            </div>
        </div>
    </header>
)
