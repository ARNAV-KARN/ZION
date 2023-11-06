'use client'

import React from 'react';
import {Home, Joystick, BookImage, Users, HeartHandshake} from 'lucide-react';
import { useRouter } from 'next/navigation';

const Sidebar = () => {

    const router = useRouter()
    
    const routes = [
        {
            icon: Home,
            href: '/',
            label: 'Home'
        },
        {
            icon: Joystick,
            href: '/events',
            label: 'Events'
        },
        {
            icon: BookImage,
            href: '/gallery',
            label: 'Gallery'
        },
        {
            icon: Users,
            href: '/team',
            label: 'Team'
        },
        {
            icon: HeartHandshake,
            href: '/sponsors',
            label: 'Sponsors' 
        }
    ]


    const onNavigate = (url:string) => {
        return router.push(url)
    }

  return (
    <div className='flex flex-col gap-3 space-y-4'>
        {routes.map((routes) => (
            <div key={routes.href}
            className='cursor-pointer flex items-center' 
            onClick={() => {onNavigate(routes.href)}}
            >
                <routes.icon className='h-10 w-10 mr-3' />
                {routes.label}
            </div>
        ))}
    </div>
  )
}

export default Sidebar
