import React from 'react';

// interface CopyrightProps{
//   year: number
// }

const Copyright : React.FC = () => {

  const year : number = new Date().getFullYear();
  
  return (
    <div className='copyright'>
      <div className='copyright__text'>
        <p className='copyright__text--upper'>
          COPYRIGHT {year}
        </p>
        <p className='copyright__text--middle'>
          {year}
        </p>
        <p className='copyright__text--lower'>
          &copy; ALL RIGHTS RESERVED
      </p>
      </div>
    </div>
  )
}

export default Copyright;