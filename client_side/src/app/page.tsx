import React from 'react';
import styles from "../styles/pages/_page.module.scss";
import Hero from '@/containers/hero';
import Dashboard from '@/containers/dashboard';
import SelfServe from '@/containers/self-serve';
import Trusted from '@/containers/trusted';



const Page = ({}) => {
  return (
    <div className={styles['page']}>
      <Hero />
      {/* <Dashboard /> */}
      <SelfServe name='John Doe' image='' jobPosition='Founder and CEO' companyName='10xTravel' />
      <Trusted />
    </div> 
  )
}

export default Page;