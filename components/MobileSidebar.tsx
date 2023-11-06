import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import Sidebar from './Sidebar'

const MobileSidebar = () => {
  return (
    <Sheet>
        <SheetTrigger className='md:hidden'>
            <Menu className='md:hidden h-8 w-8'/>
        </SheetTrigger>
        <SheetContent side={'right'}>
            <Sidebar />
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
