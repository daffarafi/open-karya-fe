import { Karyaitem } from '@elements'
import React, { useEffect, useState } from 'react'

export const KaryaList: React.FC = () => {
    const [loadingState, setLoadingState] = useState(true)
    const [karya, setKarya] = useState([])

    const getKarya = async () => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/karya`
            )

            const { statusCode, message, karya } = await response.json()

            if (statusCode !== 200) {
                throw new Error(message)
            }

            setKarya(karya)
        } catch (e) {
            console.log(e)
        } finally {
            setLoadingState(false)
        }
    }

    const renderKarya = () => {
        if (loadingState) {
            return (
                <div className="w-full flex justify-center">
                    <div className="w-24 aspect-square rounded-full animate-spin border-8 border-primary border-x-transparent"></div>
                </div>
            )
        }
        if (karya.length === 0) {
            return <p className="italic  text-gray-400 text-2xl">No data</p>
        } else {
            return (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {karya
                        .slice(0, 5)
                        .map(({ id, title, user, updated_at: updatedAt }) => {
                            const rawDate = new Date(updatedAt)
                            const date = rawDate.toLocaleDateString('id-ID', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })
                            return (
                                <Karyaitem
                                    key={id}
                                    user={user}
                                    karyaId={id}
                                    title={title}
                                    date={date}
                                    creatorImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvAAH6GiguvqE26hQpvWeRu2vDiU0U6uowOA&usqp=CAU"
                                    image="https://content.icarcdn.com/styles/article_cover/s3/field/article/cover/2021/mobil-terbang-konsep-xpeng-2.gif?itok=uh2nB0SN"
                                ></Karyaitem>
                            )
                        })}
                </div>
            )
        }
    }

    useEffect(() => {
        getKarya()
    }, [])

    return (
        <section className="container ">
            <h2 className="mb-4">Karya Terbaik Minggu Ini</h2>
            {renderKarya()}
        </section>
    )
}
