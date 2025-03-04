import React from 'react';
import Image from 'next/image';
import styles from "../styles/layout/_selfserve.module.scss";
import ChatBot from "../../public/chatbot.png";

const SelfServe = ({ name, image, jobPosition, companyName } : { name: string; image: string; jobPosition: string, companyName : string }) => {
  return (
    <div className={styles['self_serve']}>
      <div className={styles['self_serve--info']}>
        <div className={styles['self_serve--info__title']}>
          <h1 className={styles['self_serve--info__title__header']}>Self Serve Customer Support</h1>
        </div>
        <div className={styles['self_serve--info__description']}>
          <p>
          “Ever since implementing Wonderchat on our site, I've seen up to a 70% reduction of customer support queries in my inbox.”
          </p>
        </div>
        <hr className={styles['self_serve--info__rule']}/>
        <div className={styles['self_serve--info__profile']}>
          <div className={styles['self_serve--info__profile__image']}>
            <Image 
            width={50}
            height={50}
            src={image}
            alt='profile Image'
            />
          </div>
          <div className={styles['self_serve--info__profile__name']}>
            <p className={styles['self_serve--info__profile__name__p1']}>{name}</p>
            <p className={styles['self_serve--info__profile__name__p2']}>{jobPosition} of {companyName}</p>
          </div>
        </div>
      </div>
      <div className={styles['self_serve--image']}>
        <Image 
        width={497}
        height={410}
        src={ChatBot}
        alt='chatbot Image'
        />
      </div>
    </div>
  )
}

export default SelfServe;