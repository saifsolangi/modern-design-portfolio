import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlinePhone, AiOutlineProject } from "react-icons/ai"
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'


function Sidenav() {

    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
        console.log("state changed")
    }

    return (
        <div>

            {
                nav ?
                    <div>
                        <AiOutlineMenu className='absolute top-4 right-4 md:hidden Z-[80]' onClick={handleNav} />
                        <div className='md:block hidden fixed top-[25%] z-[20]'>

                            <a href='#main' className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                <AiOutlineHome size={20} />
                            </a>
                            <a href='#main' className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                <GrProjects size={20} />
                            </a>
                            <a href='#main' className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                <AiOutlineProject size={20} />
                            </a>
                            <a href='#main' className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                <BsPerson size={20} />
                            </a>
                            <a href='#main' className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                <AiOutlinePhone size={20} />
                            </a>

                        </div>
                    </div>
                    : <div >
                        <AiOutlineClose onClick={handleNav} className='absolute top-4 right-4 md:hidden z[22]' />
                        <div className='bg-black/70 h-screen w-full flex flex-col justify-start items-start left-0 px-5 md-hidden'>
                            <a href='#main' className='flex justify-center items-center gap-2 mb-3 text-white'>
                                <AiOutlineHome size={20} />
                                <span>Home</span>
                            </a>
                            <a href='#main' className='flex justify-center items-center gap-2 mb-3'>
                                <GrProjects size={20} />
                                <span>Work</span>
                            </a>
                            <a href='#main' className='flex justify-center items-center gap-2 mb-3'>
                                <AiOutlineProject size={20} />
                                <span>Projects</span>
                            </a>
                            <a href='#main' className='flex justify-center items-center gap-2 mb-3'>
                                <BsPerson size={20} />
                                <span>Resume</span>
                            </a>
                            <a href='#main' className='flex justify-center items-center gap-2 mb-3'>
                                <AiOutlinePhone size={20} />
                                <span>Contact</span>
                            </a>
                        </div>


                    </div>

            }
        </div>
    )
}

export default Sidenav