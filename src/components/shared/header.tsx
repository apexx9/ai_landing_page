import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { readOnlyHeaderLinks } from '@/Interfaces/components';

import Button from './button';


const HeaderLinks : readOnlyHeaderLinks[] =[
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
  return (
    <div className='header'>
      {/* Logo */}
      <div className='header__logo'>
        
      </div>
      {/* Nav Links */}
      <nav className='header__nav'>
        <ul>
        {HeaderLinks.map((link) => (
          <li className='header__nav--item'>
          <Link key={link._id} href={link.url}>{link.name}</Link>
          </li>
        ))}
        </ul>
      </nav>

      {/* CTA */}
      <div className='header__cta'>
        <Button 
        variant = 'primary'
        onClick = {}
        className='header__cta--primary'
        >
          {"Sign In"}
          </Button>

        <Button 
        variant = 'secondary'
        onClick = {}
        className='header__cta--secondary'
        >
          {"Sign Up"}
          </Button>
      </div>
    </div>
  )
}

export default Header;