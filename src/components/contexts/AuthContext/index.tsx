import { useRouter } from 'next/router'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
    AuthContextInterface,
    UserInterface,
    AuthContextProviderProps,
} from './interface'

const AuthContext = createContext({} as AuthContextInterface)
export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children,
}) => {
    const router = useRouter()
    const [user, setUser] = useState<UserInterface | null>(null)
    const [loadingState, setLoadingState] = useState(false)

    const login = () => {
        setLoadingState(true)
        router.push('/')
    }

    const validateJwtToken = (token: string | undefined) => {
        // console.log('validate!')
        // const rawToken = (token as string).includes('Bearer')
        //     ? (token as string).split(' ')[1]
        //     : (token as string)
        // const base64Url = rawToken.split('.')[1]
        // const base64 = base64Url.replace('-', '+').replace('_', '/')
        // console.log(JSON.parse(window.atob(base64)))
    }

    useEffect(() => {
        const token = localStorage.getItem('at')
        if (token) {
            validateJwtToken(token)
        } else {
            login()
        }
    }, [])

    const contextValue = { user, setUser, loadingState }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
