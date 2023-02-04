import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { UserInterface } from 'src/components/contexts/AuthContext/interface'
import { KaryaInterace } from './interface'

export const KaryadetailModule: React.FC = () => {
    const router = useRouter()
    const [loadingState, setLoadingState] = useState(true)
    const [scrollState, setScrollState] = useState(false)
    const [karyaDetail, setKaryaDetail] = useState<KaryaInterace>({
        id: null,
        title: 'No Title',
        description: 'No Description',
        user: null,
        tags: [],
        created_at: '-',
        updated_at: '-',
    })
    const [tabState, setTabState] = useState<'tags' | 'faq' | 'diskusi'>('tags')
    const [user, setUser] = useState<UserInterface | null>(null)

    const getKaryaDetailById = async (id: string | string[] | undefined) => {
        try {
            setLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/karya/${id}`
            )
            const { statusCode, message, karya } = await response.json()

            if (statusCode !== 200) {
                throw new Error(message)
            }

            setKaryaDetail(karya)
        } catch (e) {
            alert(e)
        } finally {
            setLoadingState(false)
        }
    }

    const editButtonHandler = () => {
        router.push(`/karya/${karyaDetail.id}/edit`)
    }

    const deleteButtonHandler = async () => {
        try {
            if (
                !confirm(
                    `Apakah anda yakin ingin menghapus karya "${karyaDetail.title}"?`
                )
            ) {
                return
            }
            const option = {
                method: 'delete',
                headers: {
                    Authorization: `Bearer ${JSON.parse(
                        localStorage.getItem('at') || '{}'
                    )}`,
                },
            }
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/karya/${karyaDetail.id}`,
                option
            )
            // const { statusCode, message } = await response.json()

            // if (statusCode !== 200) {
            //     throw new Error(message)
            // }

            router.push('/karya')
            return response
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        if (!router.isReady) return
        const { id } = router.query
        getKaryaDetailById(id)
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                setScrollState(true)
            } else {
                setScrollState(false)
            }
        })
    }, [router.isReady])

    useEffect(() => {
        const user = localStorage.getItem('user') || '{}'
        const userObj = JSON.parse(user)
        setUser(user !== '{}' ? userObj : null)
    }, [])

    return (
        <>
            <header className="w-full h-[80vh] sticky -z-10 top-0 bg-gray-300 ">
                {loadingState ? (
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="w-24 aspect-square rounded-full animate-spin border-8 border-primary border-x-transparent"></div>
                    </div>
                ) : (
                    <Image
                        src={
                            'https://content.icarcdn.com/styles/article_cover/s3/field/article/cover/2021/mobil-terbang-konsep-xpeng-2.gif?itok=uh2nB0SN'
                        }
                        fill
                        className={`object-cover object-center transition-all ${
                            scrollState ? 'brightness-75' : ''
                        }`}
                        alt={karyaDetail.title}
                    ></Image>
                )}
            </header>
            <section className="w-full bg-slate-50 -mt-20">
                {loadingState ? (
                    <div className="w-full flex justify-center pt-20">
                        <div className="w-24 aspect-square rounded-full animate-spin border-8 border-primary border-x-transparent"></div>
                    </div>
                ) : (
                    <div className="container px-0 md:px-[14px] flex gap-5">
                        <div className="py-14 px-6 border-x-[1px] w-full border-[#00000015] ">
                            <div className="flex justify-between lg:hidden w-full items-center gap-2 mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center text-white text-xl">
                                        {karyaDetail.user?.firstName
                                            .charAt(0)
                                            .toLocaleUpperCase()}
                                        {karyaDetail.user?.lastName
                                            .charAt(0)
                                            .toLocaleUpperCase()}
                                    </div>
                                    <div className="flex flex-col ">
                                        <h3>{`${karyaDetail.user?.firstName} ${karyaDetail.user?.lastName}`}</h3>
                                        <p>{karyaDetail.user?.description}</p>
                                    </div>
                                </div>
                                {user?.id === karyaDetail.user?.id ? (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={editButtonHandler}
                                            className="rounded-md p-2 text-white bg-green-700 inline-block"
                                        >
                                            Edit Karya
                                        </button>
                                        <button
                                            onClick={deleteButtonHandler}
                                            className="rounded-md p-2 text-white bg-red-700 inline-bloc"
                                        >
                                            Hapus Karya
                                        </button>
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                            <h2 className="font-bold mb-6">
                                {karyaDetail.title}
                            </h2>
                            <p className="text-lg">{karyaDetail.description}</p>
                            <div className="flex w-full justify-center mt-12 mb-6">
                                <button
                                    onClick={() => setTabState('tags')}
                                    className={`px-3 sm:px-6 py-2 rounded-sm  border-b-4 ${
                                        tabState === 'tags'
                                            ? 'border-primary'
                                            : ''
                                    } transition-all hover:bg-gray-200`}
                                >
                                    Tags
                                </button>
                                <button
                                    onClick={() => setTabState('faq')}
                                    className={`px-3 sm:px-6 py-2 rounded-sm border-b-4 ${
                                        tabState === 'faq'
                                            ? 'border-primary'
                                            : ''
                                    } transition-all hover:bg-gray-200`}
                                >
                                    FAQ
                                </button>
                                <button
                                    onClick={() => setTabState('diskusi')}
                                    className={`px-3 sm:px-6 py-2 rounded-sm border-b-4 ${
                                        tabState === 'diskusi'
                                            ? 'border-primary'
                                            : ''
                                    } transition-all hover:bg-gray-200`}
                                >
                                    Diskusi
                                </button>
                            </div>
                            <div>
                                {tabState === 'tags' ? (
                                    <div className="flex flex-wrap gap-2">
                                        {karyaDetail.tags.map((tag) => (
                                            <div
                                                key={tag}
                                                className={
                                                    'drop-shadow-md px-2 rounded-full bg-gray-50 text-primary whitespace-nowrap'
                                                }
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="w-full h-24 bg-[#00000030] flex justify-center items-center">
                                        <p className="bg-white rounded-full px-4 drop-shadow-md text-primary text-center">
                                            Dalam tahap pengembangan!
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <aside className="py-14 px-6 hidden lg:block">
                            <div className="flex sticky top-36 flex-col gap-1 w-80">
                                <div className="w-20 h-20 bg-gray-500 rounded-full flex justify-center items-center text-white text-4xl">
                                    {karyaDetail.user?.firstName
                                        .charAt(0)
                                        .toLocaleUpperCase()}
                                    {karyaDetail.user?.lastName
                                        .charAt(0)
                                        .toLocaleUpperCase()}
                                </div>
                                <h3>{`${karyaDetail.user?.firstName} ${karyaDetail.user?.lastName}`}</h3>
                                <p>{karyaDetail.user?.description}</p>
                                {user?.id === karyaDetail.user?.id ? (
                                    <>
                                        <button
                                            onClick={editButtonHandler}
                                            className="rounded-md p-2 text-white bg-green-700 inline-block"
                                        >
                                            Edit Karya
                                        </button>
                                        <button
                                            onClick={deleteButtonHandler}
                                            className="rounded-md p-2 text-white bg-red-700 inline-bloc"
                                        >
                                            Hapus Karya
                                        </button>
                                    </>
                                ) : (
                                    ''
                                )}
                            </div>
                        </aside>
                    </div>
                )}
            </section>
        </>
    )
}
