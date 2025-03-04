'use client'

import React from 'react';
import Image from 'next/image';
import styles from "../styles/layout/_hero.module.scss";
import Button from '@/components/shared/button';
import LargeStar from "../../public/starUnion.png";
import SmallStar from "../../public/starUnion-small.png";
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className={styles['hero__content']}>
        <span className={styles["hero__content--header"]}>
          <Image
            src={SmallStar}
            alt="Small star"
            width={20} // Replace with actual width
            height={20} // Replace with actual height
            className={styles['hero__content--header--image']}
          />
          <h5 className={styles['hero__content--header--title']}>
            welcome to wonderchat
          </h5>
        </span>
        <p className={styles['hero__content--subheader']}>
          Instantly Build an AI chatbot with your knowledge base
        </p>
        <p className={styles['hero__content--description']}>
          Share your site link or upload any PDF file to create a ChatGPT powered custom chatbot in 5 minutes
        </p>
        <span className={styles['hero__content--button']}>
          <Button 
            variant='secondary' 
            className={styles['hero__content--button--secondary']}
          >
            {"Get Started For Free"}
          </Button>
          <Button 
            variant='primary' 
            className={styles['hero__content--button--primary']}
            icon={faPlay}
          >
            {"Watch Video"}
          </Button>
        </span>
      </div>
      <div className={styles['hero__stars']}>
        <Image 
          src={LargeStar}
          alt="stars"
          width={358.95} 
          height={341} 
        />
        <Image 
          src={LargeStar}
          alt="Small star" 
          width={358.95} 
          height={341} 
        /> 
      </div>
    </div>
  )
}

export default Hero;