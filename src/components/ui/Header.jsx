"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Navlinks from './Navlinks';
import Button from './Button';
import Image from 'next/image';
import Logo from '../../../public/next.svg';

const Header = () => {
    const [MobileMenu, setMobileMenu] = useState(false);
    return (<>
        <nav>

            <div>

                <div className='flex flex-row justify-between items-center p-5 z-50'>
                    <Image src={Logo} alt='picture' className='h-3' />
                    <button className=' lg:hidden' onClick={() => setMobileMenu(!MobileMenu)}>
                        {
                            MobileMenu ? <GiHamburgerMenu /> :
                                <IoClose />
                        }
                    </button>
                </div>
                <ul className=' uppercase items-center gap-8 hidden lg:flex'>
                    <li><Link href={'/'} className='py-7 inline-block px-3'>Home</Link></li>
                    <Navlinks />

                    <div>
                        <Button />
                    </div>
                </ul>

                {/* mobilenav */}
                <ul className={`h-full w-full bottom-0 bg-gray-600  py-24 absolute duration-500 pl-4 ${MobileMenu ? 'left-[-1000px]' : 'left-0'}`}>
                    <li><Link href={'/'} className='py-7 inline-block px-3'>Home</Link></li>
                    <Navlinks />
                    <div>
                        <Button />
                    </div>
                </ul>



            </div>





        </nav>


    </>);
}


export default Header;