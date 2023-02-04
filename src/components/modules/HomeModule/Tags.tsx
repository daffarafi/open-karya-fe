import Link from 'next/link'
import React from 'react'
import { tags } from './constant'

export const Tags: React.FC = () => (
    <section className="container mb-20">
        <h2 className="mb-4 text-center">Jelajahi Lebih Banyak</h2>
        <div className="flex gap-4 flex-wrap justify-center">
            {tags.map(({ title, category, logo }) => (
                <Link
                    href={`/karya?category=${category}`}
                    key={title}
                    className="w-44 py-4 aspect-video flex flex-col gap-2 rounded-lg justify-center items-center drop-shadow-xl bg-white transition-all hover:scale-90 duration-150"
                >
                    {logo}
                    <h3 className="text-center">{title}</h3>
                </Link>
            ))}
        </div>
    </section>
)
