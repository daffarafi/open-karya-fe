import Link from 'next/link'
import React from 'react'
import { SlideProps } from '../interface'

export const ThirdSlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="container w-full h-screen flex items-center justify-end">
            <div className="flex gap-6 flex-col justify-center items-end w-min text-end">
                <h1
                    className={`text-white text-end w-max transition-all delay-300 ${
                        isActive ? '' : 'translate-y-10 opacity-0 delay-[0]'
                    }`}
                >
                    Bergabung dan bagikan <br />
                    karya terbaik anda
                </h1>
                <p
                    className={`text-muted text-4xl transition-all delay-500 ${
                        isActive ? '' : 'translate-y-10 opacity-0 delay-[0]'
                    }`}
                >
                    Open Karya dibuat untuk mempermudah anda dalam membagikan
                    karya terbaik yang pernah anda ciptakan.
                </p>
                <div
                    className={`flex transition-all delay-700 ${
                        isActive ? '' : 'translate-y-10 opacity-0 delay-[0]'
                    }`}
                >
                    <input
                        type="text"
                        placeholder="Alamat email"
                        className="p-2 bg-white w-72 rouneded-l-sm"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-b from-blue-500 to-cyan-500 font-bold py-2 px-4 rounded-r-sm text-white"
                    >
                        Daftar
                    </button>
                </div>
            </div>
            <div
                className={`absolute bottom-0 right-0 font-semibold p-5 transition-all delay-1000 ${
                    isActive ? '' : 'translate-y-10 opacity-0 delay-[0]'
                }`}
            >
                GAMBAR INI DIBUAT MENGGUNAKAN{' '}
                <Link
                    href={'https://openai.com/product/dall-e-2'}
                    className="underline"
                >
                    DALL-E
                </Link>
            </div>
        </div>
    )
}
