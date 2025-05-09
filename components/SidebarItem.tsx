import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SidebarProps {
    icon: IconType,
    label: string,
    active?: boolean,
    href: string
}

const SidebarItem = ({ icon: Icon , label, active, href } : SidebarProps) => {
  return (
    <Link href={href} className={twMerge('flex flex-row h-auto items-center gap-x4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1', active && "text-white")}>
        <Icon size={26} />
        <p className='truncate w-full'>{label}</p>
    </Link>
  )
}

export default SidebarItem;