import { Button } from '@elements'
import Image from 'next/image'
import React from 'react'

export const PopularTags: React.FC = () => (
    <section className="container">
        <h2 className="mb-4 ">Popular Tags</h2>
        <div className="grid grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-4">
            <div className="relative min-h-[15rem] flex flex-row-reverse items-center">
                <Image
                    src={'/technology_website.jpg'}
                    alt="website"
                    fill
                    sizes="(max-width: 720px) 80vw
                            50vw"
                    className="object-cover absolute brightness-75"
                ></Image>
                <div className="relative p-6 flex flex-col gap-2">
                    <h4 className="text-white text-right">Teknologi Website</h4>
                    <div className="flex flex-row-reverse">
                        <Button>SELENGKAPNYA</Button>
                    </div>
                </div>
            </div>
            <div className="relative min-h-[15rem] flex flex-row-reverse md:row-span-2 items-center">
                <Image
                    src={'/artificial_intelligence.jpg'}
                    alt="kecerdasan buatan"
                    fill
                    sizes="(max-width: 720px) 80vw
                    50vw"
                    className="object-cover absolute brightness-75"
                ></Image>
                <div className="relative p-6 flex flex-col gap-2">
                    <h4 className="text-white text-right">Kecerdasan Buatan</h4>
                    <div className="flex flex-row-reverse">
                        <Button>SELENGKAPNYA</Button>
                    </div>
                </div>
            </div>
            <div className="relative min-h-[15rem] flex flex-row-reverse items-center">
                <Image
                    src={'/robotics.jpg'}
                    alt="robotika"
                    fill
                    sizes="(max-width: 720px) 80vw
                    50vw"
                    className="object-cover absolute brightness-75"
                ></Image>
                <div className="relative p-6 flex flex-col gap-2">
                    <h4 className="text-white text-right">Robotika</h4>
                    <div className="flex flex-row-reverse">
                        <Button>SELENGKAPNYA</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
