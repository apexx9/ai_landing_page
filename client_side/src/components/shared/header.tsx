'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { readOnlyHeaderLinks } from '@/Interfaces/components';

import Logo from "../../../public/logo/Logo.png";
import Button from './button';
import styles from "@/styles/components/_header.module.scss";

const HeaderLinks : readOnlyHeaderLinks[] = [
  {_id: 1,
    name:'Features',
    url: '/features'
  },
  {_id: 2,
    name:'Contacts',
    url:'/contacts'
  },
  {_id: 3,
    name:'Pricing',
    url:'/pricing'
  },
  {_id: 4,
    name:'Affiliates',
    url:'/affiliates'
  }
]


const Header = ({}) => {


const router = useRouter();

const handleImageClick = () => {
  router.push('/');
  alert("you want to navigate to the home page");
}

const handleAccountClick = (Children: String) => {
  router.push('/register');
  alert('you are navigating to the registration page');
}


  return (
    <div className={styles['header']}>
      {/* Logo */}
      <div className={styles['header__logo']}>
        <Image 
        alt= "the company logo"
        src={Logo}
        width={268}
        height={40.63}
        onClick={handleImageClick}
        />
      </div>
      {/* Nav Links */}
      <nav className={styles['header__nav']}>
        {HeaderLinks.map((link) => (

          <Link key={link._id} 
          href={link.url}
          className={styles['header__nav--item']}
          >{link.name}</Link>

        ))}
      </nav>

      {/* CTA */}
      <div className={styles['header__cta']}>
        <Button 
        variant = 'primary'
        onClick = {() => alert(`you have clicked the primary button`)}
        className = {styles['header__cta--primary']}
        >
          {"Sign In"}
          </Button>

        <Button 
        variant = 'secondary'
        onClick = {() => alert(`you have clicked the secondary button`)}
        className = {styles['header__cta--secondary']}
        >
          {"Sign Up"}
          </Button>
      </div>
    </div>
  )
}

export default Header;