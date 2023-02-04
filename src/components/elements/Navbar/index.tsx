import React, { useEffect, useState } from 'react'
import { navLinks } from './constant'
import Link from 'next/link'
import { OpenKaryaLogo } from '@icons'
import { CustomButton } from '@elements'
// import { UserInterface } from 'src/components/contexts/AuthContext/interface'
import { useRouter } from 'next/router'
import { useAuthContext } from '@contexts'

export const Navbar: React.FC = () => {
    const router = useRouter()
    const [navbarState, setNavbarState] = useState({
        isCollapsed: true,
        isTransparent: true,
        isColorChangeDisabled: false,
    })
    // const [user, setUser] = useState<UserInterface | null>(null)
    const { user, setUser } = useAuthContext()

    const toggleNavbar = () => {
        setNavbarState((states) => ({
            ...states,
            isCollapsed: !navbarState.isCollapsed,
        }))
    }

    const closeNavbar = () => {
        setNavbarState((states) => ({
            ...states,
            isCollapsed: true,
        }))
    }

    const isNavbarColorDisable = () => {
        const pathName = window.location.pathname
        if (pathName === '/') {
            return false
        }
        const [page, param, isEdit] = pathName.split('/').filter(Boolean)
        if (page === 'karya' && param !== undefined && isEdit === undefined) {
            return false
        }
        return true
    }

    const toggleNavbarColor = () => {
        if (isNavbarColorDisable()) {
            setNavbarState((states) => ({
                ...states,
                isTransparent: false,
            }))
            return
        }
        if (window.scrollY >= 100) {
            setNavbarState((states) => ({
                ...states,
                isTransparent: false,
            }))
        } else {
            setNavbarState((states) => ({
                ...states,
                isTransparent: true,
            }))
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('at')
        setUser(null)
    }

    const getFullName = () => {
        const fullName = `${user?.firstName} ${user?.lastName}`
        return fullName.length >= 10 ? `${fullName.slice(0, 10)}...` : fullName
    }

    useEffect(() => {
        const user = localStorage.getItem('user') || '{}'
        const userObj = JSON.parse(user)
        setUser(user !== '{}' ? userObj : null)
        window.addEventListener('scroll', toggleNavbarColor)
    }, [])

    useEffect(() => {
        toggleNavbarColor()
    }, [router.route])

    return (
        <nav
            className={`transition-all fixed z-10 top-0 left-0 w-full ${
                navbarState.isTransparent
                    ? 'bg-transparent border-transparent'
                    : 'bg-secondary border-b-[1px] border-white shadow-xl'
            }`}
        >
            <div className="grid grid-cols-3 h-20 items-center container">
                <div>
                    <div
                        onClick={toggleNavbar}
                        className="md:hidden w-7 h-5 flex flex-col justify-between relative z-20"
                    >
                        <div
                            className={`transition-all w-full h-0.5 rounded-lg bg-white ${
                                navbarState.isCollapsed
                                    ? ''
                                    : 'rotate-45 translate-x-[1px] translate-y-1.5'
                            }`}
                        ></div>
                        <div
                            className={`transition-all h-0.5 rounded-lg bg-white ${
                                navbarState.isCollapsed ? 'w-full' : 'w-0'
                            }`}
                        ></div>
                        <div
                            className={`transition-all w-full h-0.5 rounded-lg bg-white  ${
                                navbarState.isCollapsed
                                    ? ''
                                    : '-rotate-45 translate-x-[1px] -translate-y-[12px]'
                            }`}
                        ></div>
                    </div>
                    <div
                        onClick={closeNavbar}
                        className={`transition-all fixed md:hidden w-full h-screen top-0 bg-black opacity-30 ${
                            navbarState.isCollapsed ? '-left-full' : 'left-0'
                        }`}
                    ></div>
                    <ul
                        className={`transition-all fixed w-64 h-screen bg-black top-0  left-0 pl-3 pt-20 flex flex-col gap-8 md:flex-row md:bg-inherit md:static md:pt-0 md:pl-0 md:h-min md:w-min ${
                            navbarState.isCollapsed ? '-left-full' : 'left-0'
                        }`}
                    >
                        {navLinks.map(({ url, label }) => (
                            <li key={`nav-${url}`}>
                                <Link
                                    href={url}
                                    className="uppercase text-white"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-36">
                        <OpenKaryaLogo />
                    </div>
                </div>
                <div className="nav-profile flex flex-row-reverse">
                    {user ? (
                        <div className="w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center relative group">
                            <span className="text-white text-xl ">
                                {user.firstName?.charAt(0).toLocaleUpperCase()}
                                {user.lastName?.charAt(0).toLocaleUpperCase()}
                            </span>
                            <div className="bg-white drop-shadow-md rounded-lg absolute top-full mt-4 py-2 right-0 flex-col items-center hidden group-hover:flex">
                                <div className="absolute right-3 bottom-full border-8 border-b-white border-t-transparent border-l-transparent border-r-transparent "></div>
                                <div className="text-center text-xl ">
                                    <Link href={`/user/${user.id}`}>
                                        {getFullName()}
                                    </Link>
                                </div>
                                <div className="w-4/5 h-[0.5px] bg-gray-500"></div>
                                <div className="w-full">
                                    <Link href={'/upload'}>
                                        <CustomButton isFullWidth>
                                            UNGGAH KARYA
                                        </CustomButton>
                                    </Link>
                                </div>
                                <div className="w-full">
                                    <CustomButton
                                        isFullWidth
                                        onClick={handleLogout}
                                    >
                                        LOGOUT
                                    </CustomButton>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link href="/login">
                            <CustomButton variant="secondary">
                                LOGIN
                            </CustomButton>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    )
}
