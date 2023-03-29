import React from 'react'
import Link from 'next/link'
import {
    Linkedin,
    Facebook,
    Twitter,
    Google,
    Steam,
    Instagram,
    Adobe,
    Pinterest,
} from '@icons'

export const Support: React.FC = () => {
    return (
        <div className="flex flex-col items-center mb-2">
            <p className="text-muted font-extralight text-lg mb-4">
                Banyak perusahaan mempercayai kami!
            </p>
            <div className="relative container ">
                <div className="w-full flex top-0 left-0 overflow-hidden group">
                    <div className="flex w-min  animate-scroll group-hover:pause">
                        <Link
                            href={'https://www.facebook.com'}
                            className="mx-8"
                        >
                            <Facebook fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link
                            href={'https://www.instagram.com'}
                            className="mx-8"
                        >
                            <Instagram fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link href={'https://www.google.com'} className="mx-8">
                            <Google fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link href={'https://www.twitter.com'} className="mx-8">
                            <Twitter fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link href={'https://www.adobe.com'} className="mx-8">
                            <Adobe fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link
                            href={'https://www.linkedin.com'}
                            className="mx-8"
                        >
                            <Linkedin fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link href={'https://www.steam.com'} className="mx-8">
                            <Steam fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link
                            href={'https://www.pinterest.com'}
                            className="mx-8"
                        >
                            <Pinterest fill="fill-muted" size="w-32 h-32" />
                        </Link>
                    </div>
                    <div className="flex w-min  animate-scroll group-hover:pause">
                        <Link
                            href={'https://www.facebook.com'}
                            className="mx-8"
                        >
                            <Facebook fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link
                            href={'https://www.instagram.com'}
                            className="mx-8"
                        >
                            <Instagram fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link href={'https://www.google.com'} className="mx-8">
                            <Google fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link href={'https://www.twitter.com'} className="mx-8">
                            <Twitter fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link href={'https://www.adobe.com'} className="mx-8">
                            <Adobe fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link
                            href={'https://www.linkedin.com'}
                            className="mx-8"
                        >
                            <Linkedin fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link href={'https://www.steam.com'} className="mx-8">
                            <Steam fill="fill-muted" size="w-32 h-32" />
                        </Link>
                        <Link
                            href={'https://www.pinterest.com'}
                            className="mx-8"
                        >
                            <Pinterest fill="fill-muted" size="w-32 h-32" />
                        </Link>
                    </div>
                </div>
                <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-landing-bg to-transparent" />
                <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-landing-bg to-transparent" />
            </div>
        </div>
    )
}
