import { useAuthContext } from '@contexts'
import { CustomButton } from '@elements'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const LoginModule: React.FC = () => {
    const router = useRouter()
    const [loginForm, setLoginForm] = useState({ email: '', password: '' })
    const [buttonLoadingState, setButtonLoadingState] = useState(false)
    const { setUser } = useAuthContext()
    const loginHandler = async () => {
        try {
            setButtonLoadingState(true)
            const option = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: loginForm.email,
                    password: loginForm.password,
                }),
            }

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                option
            )

            const {
                statusCode,
                access_token: accessToken,
                message,
                user,
            } = await response.json()

            if (statusCode !== 200) {
                throw new Error(message)
            }

            setUser(user)
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('at', JSON.stringify(accessToken))

            router.push('/')
        } catch (e) {
            alert(e)
        } finally {
            setButtonLoadingState(false)
        }
    }

    useEffect(() => {}, [])

    return (
        <div className="bg-primary w-full h-screen flex justify-center items-center px-4">
            <div className="bg-white py-9 px-6 md:px-9 rounded-3xl flex flex-col gap-4 w-full max-w-md">
                <h4 className="text-gray-700">Login</h4>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        onKeyUp={(e) => {
                            const target = e.target as HTMLButtonElement
                            setLoginForm((props) => ({
                                ...props,
                                email: target.value,
                            }))
                        }}
                        className="bg-gray-100 p-2 rounded-lg w-full"
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="password" className="text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        onKeyUp={(e) => {
                            const target = e.target as HTMLButtonElement
                            setLoginForm((props) => ({
                                ...props,
                                password: target.value,
                            }))
                        }}
                        className="bg-gray-100 p-2 rounded-lg w-full"
                    />
                </div>
                {buttonLoadingState ? (
                    <div className="m-2 flex justify-center">
                        <div className="w-5 aspect-square rounded-full border-2 border-primary border-x-transparent animate-spin"></div>
                    </div>
                ) : (
                    <CustomButton variant="tertiary" onClick={loginHandler}>
                        <p className="m-2">Login</p>
                    </CustomButton>
                )}
                <div>
                    <p>
                        Belum punya akun? <Link href={'/signup'}>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
