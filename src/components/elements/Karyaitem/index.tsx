import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { KaryaItemProps } from './interface'

export const Karyaitem: React.FC<KaryaItemProps> = ({
    karyaId,
    image,
    title,
    creator,
    creatorImage,
}) => {
    const renderTitle = () => {
        console.log(title.length)
        return title
    }
    return (
        <Link
            href={`/karya/${karyaId}`}
            className="w-64 aspect-[3/4] overflow-hidden drop-shadow-xl block rounded-2xl relative group bg-white"
        >
            <div className="h-[70%] w-full absolute border-b-2 border-primary rounded-2xl overflow-hidden group-hover:h-full transition-all">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center bg-gray-200 group-hover:brightness-50 transition-all"
                />
            </div>
            <div className="absolute w-full h-[30%] p-2 bottom-0 group-hover:h-full transition-all ">
                <div className="w-5/6 ">
                    <h3 className="group-hover:text-white break-words transition-all line-clamp-2">
                        {renderTitle()}
                    </h3>
                    <p className="text-xs whitespace-nowrap group-hover:text-white transition-all line-clamp-1 ">
                        Oleh {creator}
                    </p>
                    <p className="opacity-0 group-hover:opacity-100 text-xs group-hover:text-white transition-all">
                        Last update: 26 September 2023
                    </p>
                </div>
            </div>
            <div className="absolute right-0 bottom-0 h-[25%] p-2 ">
                <div className="w-8 aspect-square relative rounded-full overflow-hidden">
                    <Image
                        src={creatorImage}
                        alt={creator}
                        fill
                        className="object-cover bg-gray-200"
                    />
                </div>
            </div>
        </Link>
    )
}
