import React from 'react';
import Dphoto from '../../../public/Jahid1.png'
import Image from 'next/image';

const Profile = () => {
    return <>
    
    <div className='lg:flex flex flex-col  lg:flex-row justify-between items-center w-full h-screen mb-[60px] '>

<div className='mt-[2px]  w-[300px] lg:w-[700px] mr-[5px]'>
    {/* details  */}
    <h1 className='text-2xl lg:text-4xl'><span className='text-red-800 text-4xl lg:text-6xl'>Hi</span>, I am Jahid Hasan.<br/>I am a Frontend webdeveloper.</h1>
</div>
<div className='border-l-[20px] border-blue-700'>
    {/* picture */}
<Image src={Dphoto} alt='photo' height={200} width={200}/></div>



    </div>
    </>;
}



export default Profile;