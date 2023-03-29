import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Parallax, Navigation } from 'swiper'
import { CSSProperties } from 'react'
import { FirstSlide } from './FirstSlide'
import { SecondSlide } from './SecondSlide'
import { ThirdSlide } from './ThirdSlide'

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
        </>
    )
}
