import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import myImage from '../assets/hero-image.jpg';
import Typed from 'react-typed';

function Main() {
    return (
        <div id='main z-[20]'>
            <img src={myImage} alt='Hero Image' className='w-full h-screen object-cover object-center' />
            <div className='w-full h-screen absolute top-0 left-0 bg-black/60'>
                <div className='flex justify-center items-center flex-col w-full h-screen absolute'>
                    <h1 className='text-white'>Hey Welcome</h1>
                    <h1 className='text-white md:text-3xl font-bold'>I am
                        <Typed className='px-2'
                            strings={['Web Developer', "Brand Identity Designer",]}
                            typeSpeed={100}
                            loop={true}
                            backSpeed={30}
                        />
                    </h1>
                    <div className='text-white flex justify-center items-center gap-2 py-3'>
                        <FaTwitter size={30} className='cursor-pointer hover:scale-110 ease-in-out duration-300' />
                        <FaFacebook size={30} className='cursor-pointer hover:scale-110 ease-in-out duration-300' />
                        <FaInstagram size={30} className='cursor-pointer hover:scale-110 ease-in-out duration-300' />
                        <FaYoutube size={30} className='cursor-pointer hover:scale-110 ease-in-out duration-300' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Main;