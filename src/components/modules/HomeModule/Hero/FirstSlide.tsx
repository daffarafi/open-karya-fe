import React from 'react'
import { SlideProps } from '../interface'

export const FirstSlide: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <div className="container w-full h-screen flex items-center">
            <div className="flex gap-6 flex-col justify-center w-min">
                <h1
                    className={`text-white w-max transition-all delay-300 ${
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
        </div>
    )
}
