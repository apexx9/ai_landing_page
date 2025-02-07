import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from "../../../public/logo-Icon.png";
import type { readOnlyLowerFooterLinks } from '@/Interfaces/components';
import styles from "@/styles/components/_footer.module.scss";

{/* Upper Footer Links */}



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
  const currentYear : number = new Date().getFullYear();

  return (
    <div className={styles['footer']}>
      {/* Upper Footer */}
      <div className={styles['footer__upper']}>
        {/* Links and other stuff will be done here */}
        <div className={styles['footer__upper--logo']}>
          <Image src={Icon} 
          alt="Apex Tech Logo" 
          width={50} 
          height={50} />

        </div>
        <div className={styles['footer__upper--links']}>

        </div>
      </div>

      {/* Lower Footer */}
      <div className={styles['footer__lower']}>
        <p className={styles['footer__lower--copyright']}>
          {`© ${currentYear} Apex Tech. All Rights Reserved.`}
        </p>
        <nav className={styles['footer__lower--nav']}>
        {/* Lower Footer Links */}
        {LowerFooterLinks.map((link) => (
          <Link key={link._id} href={link.url}>{link.name}</Link>
        ))}
      </nav>
      </div>
    </div>
  )
}

export default Footer;