import React from 'react';
import Hero from '@/containers/hero';
import Dashboard from '@/containers/dashboard';



const Page = ({}) => {
  return (
    <div className='page'>
      <Hero />
      <Dashboard />
    </div>
  )
}

export default Page;