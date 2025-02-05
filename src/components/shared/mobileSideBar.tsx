import React from 'react';
import Link from 'next/link';

{/* Assets Import */}
import { COLORS } from '@/libs/constants';
import { Links } from '@/libs/url';
import { SOCIALS } from '@/libs/url';

{/* Components Import */}
import Button from './Button';

{/* Icons Import */}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const MobileSidebar = () => {
  const WHATSAPP_SOCIAL = SOCIALS.find(social => social.social === "Whatsapp");

  return (
    <div className='sidebar'>
      <nav className='sidebar__upper--nav'>
        {/* Contains the back navigation icon */}
        <FontAwesomeIcon icon={faAngleLeft} style={{color: COLORS[0]}} />
        <p 
          style={{color: COLORS[4]}} 
          className='upper-case'
        >
          Back to home
        </p>

        {/* Contains the menu icon that closes the menu */}
        <FontAwesomeIcon icon={faBarsStaggered} style={{color: COLORS[0]}} />
      </nav>

      <div className='sidebar__lower'>
        <nav className='sidebar__lower--nav'>
          {Links.map((link) => (
            <Link 
              className=''
              style={{color: COLORS[3]}}
              key={link._id}
              href={link.url}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className='sidebar__lower--contact'>
          {WHATSAPP_SOCIAL && (
            <>
              <FontAwesomeIcon icon={WHATSAPP_SOCIAL.icon} />
              <Link href={WHATSAPP_SOCIAL.url}>(+233) 257 677 310</Link>
            </>
          )}
        </div>
        <Button 
          variant='primary'
          className="ml-4"
        >
          {"LET'S TALK"}
        </Button>
      </div>
    </div>
  );
};

export default MobileSidebar;