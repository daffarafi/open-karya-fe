import Image from 'next/image'
import React from 'react'

export const Quotes: React.FC = () => (
    <section className="w-full  bg-primary  pt-8 md:pt-0">
        <div className="relative h-96 flex justify-center items-center">
            <p className="text-center max-w-4xl w-4/5 text-2xl font-thin text-white flex flex-col mb-56 md:mr-24 md:mb-0 relative z-[1]">
                <q>
                    Kalau bukan anak bangsa ini yang membangun bangsanya, siapa
                    lagi? Jangan saudara mengharapkan orang lain yang datang
                    membangun bangsa kita.
                </q>
                <i>-B. J. Habibie</i>
            </p>
            <div className="absolute z-0 bottom-0 right-0 xl:w-72 w-52 xl:h-full h-56 ">
                <Image
                    src={'/bj_habibie.png'}
                    alt="B. J. Habibie"
                    fill
                    sizes="30vw"
                    className="object-cover brightness-75"
                ></Image>
            </div>
        </div>
    </section>
)
