import React from 'react';

import { SOCIALS } from '@/libs/url';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Socials = () => {
    
  return (
    <div className='socials'>
        <div className="socials__item">
        {SOCIALS.map((social) => (
            <a key={social.social} href={social.url} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={social.icon} />
            </a>
        ))}
        </div>
    </div>
  )
}

export default Socials;