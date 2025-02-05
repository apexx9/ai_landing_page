'use client'

import React from 'react';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// import bgImage from the public folder
import Logo from "../../../public/assets/Images/logo.png";
import { COLORS } from '@/libs/constants';

{/* Definitions imports */}
// import type { HeaderLink } from '@/libs/definitions'; //Interface
// import type { makeReadonly } from '@/libs/definitions'; //Type/Interface modifier


{/* URL imports */}
import { Links } from '@/libs/url';


const Header : React.FC = () => {

  const router = useRouter();
  const handleImageClick = () => {
      router.push("/");
  }
  return (
    <header className='header flex content-wrapper align-middle px-[60px] pt-[0] justify-between'>
      {/* Header Logo */}
      <div className='header__logo'>
        <Image 
        src={Logo}
        className="w-auto h-auto hover:cursor-pointer"
        alt={"my logo"}
        width={30}
        height={30}
        onClick={handleImageClick}
        />
      </div>
      {/* Header Links */}
      <div className='header__link '>
        <nav className='header__link--item flex items-center gap-8'>
        {Links.map((link) => (
            <Link
            className='text-xs uppercase hover:opacity-80 transition-opacity'
            style={{color: COLORS[2]}}
            key={link._id}
            href={link.url}>{link.name}</Link>
        ))}
        <Button 
          variant='primary'
          className="ml-4"
        >
          {"LET'S TALK"}
        </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header;