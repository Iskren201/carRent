import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

import { TbMenuDeep } from 'react-icons/tb'
import { IoClose } from 'react-icons/io5'

import { Drawer } from '@material-tailwind/react'

export const Navigation = () => {

    const [open, setOpen] = useState(false);

    const openDrawer = () => {
        document.body.style.overflowY = 'hidden';
        setOpen(true);
        if (setOpen === true) {

        }
    }
    const closeDrawer = () => {
        document.body.style.overflowY = 'scroll';
        setOpen(false);
    }

    const listLink = [
        {
            id: 'Home',
            src: '/home',
        },
        {
            id: 'Booking',
            src: '/booking',
        },
        {
            id: 'About',
            src: '/about',
        },
        {
            id: 'Cars',
            src: '/cars',
        },
        {
            id: 'Services',
            src: '/services',
        },
        {
            id: 'Contact',
            src: '/contact',
        },
    ]
    return (
        <div>
            <div className='wrapper flex justify-between items-center py-5'>
                <img src={logo} alt="" />
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-10'>
                        {listLink.map(({ id, src }) => (
                            <li className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 hover:scale-110">
                                <Link to={src} >
                                    {id}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className='hidden lg:flex items-center gap-[30px]'>
                    <button className='text-black hover:text-green-500'>Login</button>
                    <button className='text-base border-2 border-green-500 rounded-full py-2 px-5 hover:bg-green-500 hover:border-transparent hover:text-white'>Sign Up</button>
                </div>

                <TbMenuDeep className='block lg:hidden cursor-pointer h-6 w-6' onClick={openDrawer} />
            </div>
            <Drawer className='px-6 py-12 rounded-r-lg flex flex-col gap-16 lg:hidden' open={open} onClose={closeDrawer}>
                <IoClose className='absolute right-4 top-4 h-5 w-5 cursor-pointer' onClick={closeDrawer} />
                <ul className='flex flex-col items-center gap-10'>
                    {listLink.map(({ id, src }) => (
                        <li className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 hover:scale-110">
                            <Link to={src} >
                                {id}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='w-full h-[2px] bg-primary-green rounded-full'>
                    <div className='flex flex-col gap-10'>
                        <button className='text-black hover:text-green-500'>Login</button>
                        <button className='text-base border-2 border-green-500 rounded-full py-2 px-5 hover:bg-green-500 hover:border-transparent hover:text-white'>Sign Up</button>
                    </div>
                </div>
                <div className='mt-auto flex flex-col gap-10'>
                    <img src={logo} alt="" className='h-[20px]' />
                    <p>&copy; GoCar 2023. All rights reserved.</p>
                </div>
            </Drawer>
        </div >
    )
}
