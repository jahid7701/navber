"use client"
import React, { useState } from 'react';
import Logo from '../../../public/next.svg'
import Link from 'next/link';
import Navlinks from './Navlinks';
import Button from './Button';
import Image from 'next/image';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
const Header = () => {
    const [open, setOpen] = useState(false);

    return <nav>
       
        <div className='flex   items-center justify-between  w-full bg-slate-800'>
            <div className='p-5   w-full flex justify-between items-center  z-50'>

                <Image src={Logo} alt='picture' className='cursor-pointerb lg:mr-[20px] mr-[160px] h-6 ' />
                <button className='lg:hidden' onClick={() => setOpen(!open)}>{
                    open ? <IoMdClose size={40} /> : <IoMdMenu size={40} />
                }</button>

            </div>
            <ul className='  hidden lg:flex uppercase items-center gap-4 mr-[200px]'>
                <li><Link href={'/'} className='py-7 px-3 inline-block'>Home</Link></li>
                <Navlinks />
            </ul>
            <div className='hidden lg:block pr-5'>
                <Button />
            </div>
            {/* mobilelink */}
            <ul className={`absolute  bottom-0 text-md lg:hidden w-full h-full gap-6 py-24 duration-500 pl-4 leading-7 bg-rose-800 ${open ? "left-0" : "left-[-1233px]"}`}>
                <li ><Link href={'/'} className='py-4  px-3 '>Home</Link></li>
                <Navlinks />
                <div className='py-5'>
                    <Button />
                </div>
            </ul>



        </div>


        


    </nav>;
}



export default Header;