import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../../../public/icons/logo-Icon.png';
import Apple from "../../../public/icons/ic_round-apple.png";
import { faWindows,faApple } from '@fortawesome/free-brands-svg-icons'
import type { readOnlyUpperFooterLinks, readOnlyLowerFooterLinks } from '@/Interfaces/components'; 
import styles from '@/styles/components/_footer.module.scss';
import Button from './button';

const UpperFooterLinks: readOnlyUpperFooterLinks[] = [
  {
    _id: 1,
    header: "Platform",
    links: [
      { _id: 1, name: 'Plans & Pricing', url: '#' },
      { _id: 2, name: 'Personal AI Manager', url: '#' },
      { _id: 3, name: 'AI Business Writer', url: '#' },
    ]
  },
  {
    _id: 2,
    header: "Company",
    links: [
      { _id: 1, name: 'Blog', url: '#' },
      { _id: 2, name: 'Careers', url: '#' },
      { _id: 3, name: 'News', url: '#' },
    ]
  },
  {
    _id: 3,
    header: "Resources",
    links: [
      { _id: 1, name: 'Documentation', url: '#' },
      { _id: 2, name: 'Papers', url: '#' },
      { _id: 3, name: 'Press Conferences', url: '#' },
    ]
  },
  // {
  //   _id: 4,
  //   header: "Get the App",
  //   links: [
  //     // { _id: 1, name: 'Home', url: '/' },
  //     // { _id: 2, name: 'About', url: '/about' },
  //     // { _id: 3, name: 'Services', url: '/services' },
  //   ]
  // },
];

const LowerFooterLinks: readOnlyLowerFooterLinks[] = [
  {
    _id: 1,
    name: 'Terms of Service',
    url: '#' 
  },
  {
    _id: 2,
    name: 'Privacy Policy',
    url: '#' 
  },
  {
    _id: 3,
    name: 'Cookies',
    url: '#' 
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles['footer']}>
      <div className={styles['footer__upper']}>
        <div className={styles['footer__upper--logo']}>
          <Image 
            src={Icon} 
            alt="Apex Tech Logo" 
            width={66} 
            height={40.63} 
          />
          <p className={styles['footer__upper--logo--header']}>
            Grow your business with your personal AI manager.
          </p>
          <p className={styles['footer__upper--logo--text']}>
            Apex Tech, {currentYear}.
          </p>
        </div>
        <div className={styles['footer__upper--links']}>
          {UpperFooterLinks.map((section) => (
            <section key={section._id} className={styles['footer__upper--links--section']}>
              <h3>{section.header}</h3> 
              <nav className={styles['footer__upper--links--section--nav']}>
                {section.links.map((link) => (
                  <Link key={link._id} href={link.url} className={styles['footer__upper--links--section--nav-item']}> 
                    {link.name}
                  </Link>
                ))}
              </nav>
            </section>
          ))}
          <div className={styles['footer__upper--links--buttons']}>
          <h3>Get the app</h3>
          <Button variant='primary' className={styles['footer__upper--links--buttons--item']} icon={faWindows}>
            {"Windows"}
          </Button>
          <Button variant='primary' className={styles['footer__upper--links--buttons--item']} icon={faApple}>
            {"macOS"}
          </Button>
        </div>
        </div>
      </div>

      <div className={styles['footer__lower']}>
        <p className={styles['footer__lower--copyright']}>
          {`© ${currentYear} Apex Tech. All Rights Reserved.`}
        </p>
        <nav className={styles['footer__lower--nav']}>
          {LowerFooterLinks.map((link) => (
            <Link key={link._id} href={link.url} className={styles['footer__lower--nav-item']}> 
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Footer;