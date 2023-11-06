import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileSidebar from './MobileSidebar'

const Navbar = () => {

    

  return (
        <nav className='flex justify-between items-center px-10 py-3 text-white bg-neutral-900'>
            <div className='hidden md:flex items-center gap-7'>
                <Link href={'/events'} className='hover:text-neutral-300'>Events</Link>
                <Link href={'/gallery'} className='hover:text-neutral-300'>Gallery</Link>
            </div>
                
            <div>
                <Link href='/'className='text-3xl'>  
                    ZION
                </Link>
            </div>

           <MobileSidebar />
           <div className='hidden md:flex items-center gap-7'>
                <Link href={'/team'} className='hover:text-neutral-300'>Team</Link>
                <Link href={'/sponsors'} className='hover:text-neutral-300'>Sponsors</Link>
           </div>
        </nav>
  )
}

export default Navbar
