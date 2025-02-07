import React from 'react';
import Link from 'next/link';
import type { readOnlyLowerFooterLinks } from '@/Interfaces/components';


{/* Lower Footer Links */}
const LowerFooterLinks : readOnlyLowerFooterLinks[] = [
  {
    _id: 1,
    name:'Terms of Service',
    url:''
  },
  {
    _id: 2,
    name:'Privacy Policy',
    url:''
  },
  {
    _id: 3,
    name:'Cookies',
    url:''
  },
];

const Footer : React.FC = ({}) => {
  const year : number = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='footer__upper'>
        {/* Links and other stuff will be done here */}
      </div>
      <div className='footer__lower'>
        <p className='footer__lower--copyright'>
          {`&copy ${year} Apex Tech. All Rights Reserved.`}
        </p>
      </div>
    </div>
  )
}

export default Footer;