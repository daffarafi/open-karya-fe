import { useAuthContext } from '@contexts'
import { Button } from '@elements'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export const SignupModule: React.FC = () => {
    const { setUser } = useAuthContext()
    const router = useRouter()
    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    })
    const [loadingState, setLoadingState] = useState(false)

    const signupHandler = async () => {
        try {
            setLoadingState(true)
            const option = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: signupForm.email,
                    password: signupForm.password,
                    firstName: signupForm.firstName,
                    lastName: signupForm.lastName,
                    description: '<kosong>',
                }),
            }

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
                option
            )

            const {
                user,
                access_token: accessToken,
                statusCode,
                message,
            } = await response.json()

            if (statusCode !== 201) {
                throw new Error(message)
            }

            setUser(user)
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('at', JSON.stringify(accessToken))

            router.push('/')
        } catch (e) {
            console.log(e)
        } finally {
            setLoadingState(false)
        }
    }

    return (
        <div className="bg-primary w-full h-screen flex justify-center items-center px-4">
            <div className="bg-white py-9 px-6 md:px-9 rounded-3xl flex flex-col gap-4 w-full max-w-md">
                <h4 className="text-gray-700">Sign Up</h4>
                <div className="flex flex-col">
                    <label htmlFor="firstName" className="text-gray-700">
                        First name
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        onKeyUp={(e) => {
                            const target = e.target as HTMLButtonElement
                            setSignupForm((props) => ({
                                ...props,
                                firstName: target.value,
                            }))
                        }}
                        className="bg-gray-100 p-2 rounded-lg w-full"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="lastName" className="text-gray-700">
                        Last name (Opsional)
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        onKeyUp={(e) => {
                            const target = e.target as HTMLButtonElement
                            setSignupForm((props) => ({
                                ...props,
                                lastName: target.value,
                            }))
                        }}
                        className="bg-gray-100 p-2 rounded-lg w-full"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        onKeyUp={(e) => {
                            const target = e.target as HTMLButtonElement
                            setSignupForm((props) => ({
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
                            setSignupForm((props) => ({
                                ...props,
                                password: target.value,
                            }))
                        }}
                        className="bg-gray-100 p-2 rounded-lg w-full"
                    />
                </div>
                {loadingState ? (
                    <div className="m-2 flex justify-center">
                        <div className="w-5 aspect-square rounded-full border-2 border-primary border-x-transparent animate-spin"></div>
                    </div>
                ) : (
                    <Button variant="tertiary" onClick={signupHandler}>
                        <p className="m-2">Sign Up</p>
                    </Button>
                )}
                <div>
                    <p>
                        Sudah punya akun? <Link href={'/login'}>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
