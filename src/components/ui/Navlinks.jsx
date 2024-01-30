
import React, { useState } from 'react';
import { links } from './Lin';
// onClick={() => heading !== Link.name ? setHeading(Link.name) : setHeading("")} 
// className={`${heading === Link.name ? 'block' : 'hidden'} `}
//  const [heading, setHeading] = useState("");





const Navlinks = () => {
   

    return (<>
        {
            links.map((Link, index) => (
                <div>
                <div className='hidden lg:block'>
                <div key={index} className=' group  '>
                    <div>

                    <h1 className='cursor-pointer '>{Link.name}</h1>
                  

                    {
                        Link.submenu && (
                            <div >

                                <div className='absolute  top-10  hidden group-hover:block   ' >
                                <div className='py-3'>
                                                        <div className='bg-white w-4 h-4 absolute left-1   top-[11px] mt-1 rotate-45'></div>
                                                    </div>

                                    <div className='grid grid-cols-2  bg-white' >

                                        {

                                            Link.sublinks.map((mysublink, index) => (
                                                <div key={index} className="mr-0  p-3.5 " >

                                                  
                                                    <h1 className='py-4 pl-7 font-semibold pr-5'>{mysublink.head}</h1>
                                                    {
                                                        mysublink.sublink.map((slink, index) => (
                                                            <li className='py-2 pl-14 text-sm' key={index}>{slink.name}</li>
                                                        ))
                                                    }
                                                </div>

                                            ))
                                        }
                                    </div>

                                </div>


                            </div>
                        )
                    }
                    
</div>
                </div> 
                </div>
                {/* mobill */}
                <div className='lg:hidden'>
<h1 className='ml-2'>{Link.name}</h1>
{
    Link.submenu && <div>



    </div>
}
                </div>
                </div>

            ))

        }</>);
}
export default Navlinks;