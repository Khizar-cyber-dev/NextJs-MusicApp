'use client';

import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react'
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import Button from './Button';
import useAuthModal from '@/hooks/useAuthModal';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '@/hooks/useUser';
import { FaUserAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Header = ({ children }: { children : ReactNode } ) => {
    const router = useRouter();
    const authModal = useAuthModal();
    const supabaseClient = useSupabaseClient();
    const { user } = useUser();

    const handleLogout = async () => {
      const { error } = await supabaseClient.auth.signOut();
      router.refresh();
      if (error) {
        toast.error(error.message);
      }else{
        toast.success('Logged out successfully!');
      }
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
                {user ? (
                    <div className='flex gap-x-4 items-center'>
                        <Button className='bg-white px-6 py-2' onClick={handleLogout}>
                            LogOut
                        </Button>
                        <Button onClick={() => router.push('/account')} className='bg-white rounded-full p-2 flex items-center justify-center hover:opacity-75 transition'>
                            <FaUserAlt />
                        </Button>
                        Logged in
                    </div>
                ): (
                    <>
                    <div>
                        <Button className='bg-transparent text-neutral-500 font-medium' onClick={authModal.onOpen}>
                            Sign up
                        </Button>
                    </div>
                    <div>
                        <Button className='bg-transparent text-neutral-500 font-medium' onClick={authModal.onOpen}>
                            Log in
                        </Button>
                    </div>
                   </>
                )}
            </div>
       </div>
       {children}
    </div>
  )
}

export default Header