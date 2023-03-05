import React from 'react'
import { SlideProps } from '../interface'

export const SecondSlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="container w-full h-screen flex items-center justify-center">
            <div className="flex gap-6 flex-col justify-center items-center text-center w-min">
                <h1
                    className={`text-white w-max transition-all delay-300 ${
                        isActive ? '' : 'translate-y-10 opacity-0 delay-[0]'
                    }`}
                >
                    Cari karya yang luar biasa!
                </h1>
                <p
                    className={`text-muted text-4xl transition-all delay-500 ${
                        isActive ? '' : 'translate-y-10 opacity-0 delay-[0]'
                    }`}
                >
                    Cobalah cari karya menarik yang sudah pernah di upload
                    sebelumnya!
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
                        Cari
                    </button>
                </div>
            </div>
        </div>
    )
}
