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
    const [open,setOpen]=useState(false);
    return <nav>
        <div className='flex items-center justify-around'>
            <div className='p-5 w-full flex justify-between   z-50'>
              
                <Image src={Logo} alt='picture' className='cursor-pointerb h-6 '/>
<button  onClick={()=>setOpen(!open)}>{
    open?<IoMdClose />:<IoMdMenu />
}</button>

            </div>
            <ul className='  hidden lg:flex uppercase items-center gap-8 '>
                <li><Link href={'/'} className='py-7 px-3 inline-block'>Home</Link></li>
                <Navlinks />
            </ul>
            <div>
                <Button />
            </div>
            {/* mobilelink */}
            <ul className={`absolute bottom-0 w-full h-full py-24 duration-500 pl-4 bg-rose-800 ${open?"left-0":"left-[-1233px]"}`}>
                <li><Link href={'/'} className='py-7 px-3 inline-block'>Home</Link></li>
                <Navlinks />
                <div className='py-5'>
                    <Button />
                </div>
            </ul>



        </div>





    </nav>;
}



export default Header;