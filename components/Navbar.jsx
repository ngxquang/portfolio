import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, [])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>


        <nav className={`w-full fixed px-5 lg:px-8 
                xl:px-[8%] py-4 flex items-center justify-between z-50 
                ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
            <a href="">
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 cursor-pointer mr-14'/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
                ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
                <li><a className='font-Ovo' href='#top'>Home</a></li>
                <li><a className='font-Ovo' href='#about'>About me</a></li>
                <li><a className='font-Ovo' href='#skills'>Skills</a></li>
                <li><a className='font-Ovo' href='#work'>My Projects</a></li>
                <li><a className='font-Ovo' href='#contact'>Contact me</a></li>
            </ul>

            <div className='flex items-center gap-4'>

                <button onClick={() => setIsDarkMode(prev => !prev)}>
                    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6'/>
                </button>

                <div className='hidden lg:flex items-center gap-4'>
                    <a href='https://github.com/ngxquang' target='_blank' rel='noopener noreferrer' 
                    className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300'>
                    <FaGithub className='text-2xl' />
                    </a>
                    <a href='https://www.linkedin.com/in/quang-nguyen-b08b3723a/' target='_blank' rel='noopener noreferrer' 
                    className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-300'>
                    <FaLinkedin className='text-2xl' />
                    </a>
                </div>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
                </button>
            </div>

            {/* ------------ mobile menu ------------- */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 trasition duration-500 dark:bg-darkHover dark:text-white'>

                <div className='absolute top-6 right-6'
                    onClick={closeMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
                </div>
                <li><a className='font-Ovo' onClick={closeMenu} href='#top'>Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#about'>About me</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#skills'>Skills</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#work'>My Projects</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact me</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar