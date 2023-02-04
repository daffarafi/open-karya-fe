import { CustomButton } from '@elements'
import { Noimage } from '@icons'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { tags } from './constant'
import { KaryaInterface } from './interface'

export const UploadModule: React.FC = () => {
    const router = useRouter()
    const defaultTagsValue = tags.reduce(
        (o, key) => Object.assign(o, { [key]: false }),
        {}
    )
    const [tagsValue, setTagsValue] = useState<{ [key: string]: boolean }>(
        defaultTagsValue
    )
    const [karyaForm, setKaryaForm] = useState<KaryaInterface>({
        title: '',
        description: '',
    })

    const [buttonLoadingState, setButtonLoadingState] = useState(false)
    const [formLoadingState, setFormLoadingState] = useState(true)
    const [isEditForm, setIsEditForm] = useState(false)
    const [karyaId, setKaryaId] = useState<number | null>(null)

    const sendButtonHandler = async () => {
        try {
            setButtonLoadingState(true)
            const tags: string[] = []
            Object.entries(tagsValue).forEach(([key, value]) => {
                if (value) {
                    tags.push(key)
                }
            })
            const option = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(
                        localStorage.getItem('at') || '{}'
                    )}`,
                },
                body: JSON.stringify({
                    ...karyaForm,
                    user: JSON.parse(localStorage.getItem('user') || '{}'),
                    tags,
                }),
            }
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/karya`,
                option
            )
            const { statusCode, message } = await response.json()

            if (statusCode !== 201) {
                throw new Error(message)
            }

            router.push('/karya')

            return
        } catch (e) {
            alert(e)
        } finally {
            setButtonLoadingState(false)
        }
    }

    const editButtonHandler = async () => {
        try {
            setButtonLoadingState(true)
            const tags: string[] = []
            Object.entries(tagsValue).forEach(([key, value]) => {
                if (value) {
                    tags.push(key)
                }
            })
            const option = {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(
                        localStorage.getItem('at') || '{}'
                    )}`,
                },
                body: JSON.stringify({
                    ...karyaForm,
                    user: JSON.parse(localStorage.getItem('user') || '{}'),
                    tags,
                }),
            }
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/karya/${karyaId}`,
                option
            )
            const { statusCode, message } = await response.json()

            if (statusCode !== 200) {
                throw new Error(message)
            }

            router.push(`/karya/${karyaId}`)

            return
        } catch (e) {
            alert(e)
        } finally {
            setButtonLoadingState(false)
        }
    }

    const cancelButtonHandler = () => {
        router.back()
    }

    const createTag = (tagName: string, value: boolean) => {
        return (
            <div key={tagName}>
                <label
                    htmlFor={tagName}
                    className={`drop-shadow-md px-2 rounded-full ${
                        value
                            ? 'bg-primary text-white'
                            : 'bg-gray-50 text-primary'
                    }`}
                >
                    {tagName}
                </label>
                <input
                    type="checkbox"
                    id={tagName}
                    className="hidden"
                    checked={tagsValue[tagName]}
                    onChange={() =>
                        setTagsValue((states) => ({
                            ...states,
                            [tagName]: !tagsValue[tagName],
                        }))
                    }
                />
            </div>
        )
    }

    const fetchKaryaDetailById = async (id: number) => {
        try {
            setFormLoadingState(true)
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/karya/${id}`
            )
            const { statusCode, karya, message } = await response.json()

            if (statusCode !== 200) {
                throw new Error(message)
            }

            setKaryaForm({
                title: karya.title,
                description: karya.description,
            })
            karya.tags.forEach((tag: string) => {
                setTagsValue((tags) => ({ ...tags, [tag]: true }))
            })
        } catch (e) {
            alert(e)
        } finally {
            setFormLoadingState(false)
        }
    }

    useEffect(() => {
        setFormLoadingState(true)
        const pathName = window.location.pathname
        const [page, param, isEdit] = pathName.split('/').filter(Boolean)
        if (page === 'upload' && param === undefined && isEdit === undefined) {
            setIsEditForm(false)
            setFormLoadingState(false)
            return
        }
        if (page === 'karya' && isEdit === 'edit') {
            setIsEditForm(true)
            setKaryaId(parseInt(param))
            fetchKaryaDetailById(parseInt(param))
        }
    }, [])

    return (
        <div className="w-full px-3 min-h-screen flex justify-center items-center bg-gray-200 pt-20">
            <div className="w-full max-w-4xl grid grid-cols-3 grid-rows-3 gap-4">
                <div className=" bg-white drop-shadow-xl py-3 px-4 col-span-3 md:col-span-2 row-span-3 rounded-3xl flex flex-col gap-4">
                    {formLoadingState ? (
                        <div className="w-full h-full flex items-center justify-center ">
                            <div className="w-24 aspect-square rounded-full animate-spin border-8 border-primary border-x-transparent"></div>
                        </div>
                    ) : (
                        <>
                            {' '}
                            <h4>Bagikan Karya</h4>
                            <div className="flex flex-col">
                                <label htmlFor="">Tambahkan judul</label>
                                <input
                                    type="text"
                                    className="bg-gray-100 p-2 rounded-lg w-full"
                                    value={karyaForm.title}
                                    onChange={(e) => {
                                        const target =
                                            e.target as HTMLButtonElement
                                        setKaryaForm((props) => ({
                                            ...props,
                                            title: target.value,
                                        }))
                                    }}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Deskripsi</label>
                                <textarea
                                    value={karyaForm.description}
                                    className="bg-gray-100 p-2 rounded-lg w-full h-60 resize-none"
                                    onChange={(e) => {
                                        const target = e.target
                                        setKaryaForm((props) => ({
                                            ...props,
                                            description: target.value,
                                        }))
                                    }}
                                />
                            </div>
                            <div className="flex flex-row-reverse gap-2">
                                {buttonLoadingState ? (
                                    <div className="w-5 aspect-square rounded-full border-2 border-primary border-x-transparent animate-spin"></div>
                                ) : (
                                    <>
                                        {isEditForm ? (
                                            <CustomButton
                                                variant="tertiary"
                                                onClick={editButtonHandler}
                                            >
                                                Edit
                                            </CustomButton>
                                        ) : (
                                            <CustomButton
                                                variant="tertiary"
                                                onClick={sendButtonHandler}
                                            >
                                                Selesai
                                            </CustomButton>
                                        )}
                                        <CustomButton
                                            variant="primary"
                                            onClick={cancelButtonHandler}
                                        >
                                            Batal
                                        </CustomButton>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </div>
                <div className="bg-white drop-shadow-xl col-span-3 sm:col-span-2 md:col-span-1 md:row-span-2 py-3 px-4 rounded-3xl">
                    {formLoadingState ? (
                        <div className="w-full h-full flex items-center justify-center ">
                            <div className="w-24 aspect-square rounded-full animate-spin border-8 border-primary border-x-transparent"></div>
                        </div>
                    ) : (
                        <div>
                            <label htmlFor="">Tags</label>
                            <div className="flex flex-wrap gap-3">
                                {Object.entries(tagsValue).map(
                                    ([tagName, value]) =>
                                        createTag(tagName, value)
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className="drop-shadow-xl relative group col-span-3 sm:col-span-1">
                    <div className="bg-white brightness-90 py-3 rounded-3xl h-full px-4">
                        {formLoadingState ? (
                            <div className="w-full h-full flex items-center justify-center ">
                                <div className="w-24 aspect-square rounded-full animate-spin border-8 border-primary border-x-transparent"></div>
                            </div>
                        ) : (
                            <div className="flex flex-col h-full">
                                <label htmlFor="">Tambahkan Gambar</label>
                                <div className="bg-gray-100 w-full h-full flex justify-center items-center py-4">
                                    <Noimage></Noimage>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 w-full h-full bg-[#00000030] rounded-3xl flex justify-center items-center">
                        <p className="bg-white text-primary rounded-full px-2 py-1 shadow-xl">
                            Maaf, dalam masa perbaikan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
