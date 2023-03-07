import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Parallax, Navigation } from 'swiper'
import { CSSProperties } from 'react'
import { FirstSlide } from './FirstSlide'
import { SecondSlide } from './SecondSlide'
import { ThirdSlide } from './ThirdSlide'
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

export const Hero: React.FC = () => {
    return (
        <>
            <header className="w-full relative flex text-white items-center">
                <Swiper
                    style={
                        {
                            '--swiper-navigation-color': '#fff',
                        } as CSSProperties
                    }
                    speed={600}
                    parallax={true}
                    navigation={true}
                    modules={[Parallax, Navigation]}
                >
                    <div
                        slot="container-start"
                        className="absolute left-0 top-0 w-[200%] h-full bg-cover bg-center brightness-90 bg-[url('/hero-image.jpg')]"
                        data-swiper-parallax="-50%"
                    />
                    <SwiperSlide>
                        {({ isActive }) => <FirstSlide isActive={isActive} />}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({ isActive }) => <SecondSlide isActive={isActive} />}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({ isActive }) => <ThirdSlide isActive={isActive} />}
                    </SwiperSlide>
                </Swiper>
                <div className="absolute z-10 w-full bottom-0 left-0 h-40 bg-gradient-to-b from-transparent to-landing-bg" />
                <div className="absolute z-10 w-full top-0 left-0 h-20 bg-gradient-to-t from-transparent to-landing-bg" />
            </header>
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
                            <Link
                                href={'https://www.google.com'}
                                className="mx-8"
                            >
                                <Google fill="fill-muted" size="w-32 h-32" />
                            </Link>
                            <Link
                                href={'https://www.twitter.com'}
                                className="mx-8"
                            >
                                <Twitter fill="fill-muted" size="w-32 h-32" />
                            </Link>
                            <Link
                                href={'https://www.adobe.com'}
                                className="mx-8"
                            >
                                <Adobe fill="fill-muted" size="w-32 h-32" />
                            </Link>
                            <Link
                                href={'https://www.linkedin.com'}
                                className="mx-8"
                            >
                                <Linkedin fill="fill-muted" size="w-32 h-32" />
                            </Link>
                            <Link
                                href={'https://www.steam.com'}
                                className="mx-8"
                            >
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
                            <Link
                                href={'https://www.google.com'}
                                className="mx-8"
                            >
                                <Google fill="fill-muted" size="w-32 h-32" />
                            </Link>
                            <Link
                                href={'https://www.twitter.com'}
                                className="mx-8"
                            >
                                <Twitter fill="fill-muted" size="w-32 h-32" />
                            </Link>
                            <Link
                                href={'https://www.adobe.com'}
                                className="mx-8"
                            >
                                <Adobe fill="fill-muted" size="w-32 h-32" />
                            </Link>
                            <Link
                                href={'https://www.linkedin.com'}
                                className="mx-8"
                            >
                                <Linkedin fill="fill-muted" size="w-32 h-32" />
                            </Link>
                            <Link
                                href={'https://www.steam.com'}
                                className="mx-8"
                            >
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
        </>
    )
}
