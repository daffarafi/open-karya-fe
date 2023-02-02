import React, { useEffect, useState } from 'react'
import { navLinks } from './constant'
import Link from 'next/link'
import { OpenKaryaLogo } from '@icons'
import { CustomButton } from '@elements'

export const Navbar: React.FC = () => {
    const [navbarState, setNavbarState] = useState({
        isCollapsed: true,
        isTransparent: true,
        isColorChangeDisabled: false,
    })

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

    const toggleNavbarColor = () => {
        if (navbarState.isColorChangeDisabled) return
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

    useEffect(() => {
        if (window.location.pathname !== '/') {
            setNavbarState((states) => ({
                ...states,
                isColorChangeDisabled: false,
            }))
        } else {
            setNavbarState((states) => ({
                ...states,
                isColorChangeDisabled: true,
            }))
        }
    }, [])

    window.addEventListener('scroll', toggleNavbarColor)

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
                    <Link href="/auth/login">
                        <CustomButton variant="secondary">LOGIN</CustomButton>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
