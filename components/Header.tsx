'use client';

import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react'
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

const Header = ({ children }: { children : ReactNode } ) => {
    const router = useRouter();

    const handleLogout = () => {
      // Handle logout in the future
    }
  return (
    <div className={twMerge('h-fit bg-gradient-to-b from-emerald-600 p-6')}>
       <div className="w-full mb-4 flex items-center justify-between">
            <div className="hidden md:flex gap-x-2 items-center">
                <button className='rounded-full bg-black flex justify-center hover:opacity-75 transition' onClick={() => router.back()}>
                    <RxCaretLeft size={35} className='text-white'/>
                </button>
                <button className='rounded-full bg-black flex justify-center hover:opacity-75 transition' onClick={() => router.forward()}>
                    <RxCaretRight size={35} className='text-white'/>
                </button>
            </div>
            <div className='flex md:hidden gap-x-2 items-center'>
                <button className='rounded-full p-2 bg-white items-center justify-center hover:opacity-75 transition'>
                    <HiHome className='text-black' size={20}/>
                </button>
                <button className='rounded-full p-2 bg-white items-center justify-center hover:opacity-75 transition'>
                    <BiSearch className='text-black' size={20}/>
                </button>
            </div>
            <div className='flex justify-between items-center gap-x-4'>
                <>
                    <div>
                        <Button className='bg-transparent text-neutral-500 font-medium'>
                            Sign up
                        </Button>
                    </div>
                    <div>
                        <Button className='bg-transparent text-neutral-500 font-medium'>
                            Log in
                        </Button>
                    </div>
                </>
            </div>
       </div>
       {children}
    </div>
  )
}

export default Header