import React from 'react';
import styles from "../styles/layout/_trusted.module.scss";
import Button from '@/components/shared/button';
import logo from "../libs/logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Trusted = ({}) => {
  return (
    <div className={styles['trusted']}>
        <div className={styles['trusted--upper']}>
            <div className={styles['trusted--upper__title']}>
                <h1 className={styles['trusted--upper__title__header']}>
                    Trusted by 100+ Businesses</h1>
                {/* Logos */}
                <div className={styles['trusted--upper__title__logos']}>
                    {logo.map((item) => {
                        return (
                            <div key={item._id} className={styles['trusted--upper__title__logos__logo']}>
                                <FontAwesomeIcon className={styles['trusted--upper__title__logos__logo__item']} icon={item.src} />
                            </div>
                        )
                    }
                    )}
                </div>
            </div>

            <div className={styles['trusted--upper__cta']}>
            <h1 className={styles['trusted--upper__cta__header']}>
            5 minute set-up process</h1>
            <p className={styles['trusted--upper__cta__paragraph']}>
                Spend 5 minutes to get a ChatGPT powered chatbot that works 24/7 to help you engage and retain more users and boost conversions.
                </p>

            {/* Buttons */}
            <span className={styles['trusted--upper__cta__button']}>
            <Button 
            variant='secondary' 
            className={styles['trusted--upper__cta__button__secondary']}
          >
            {"Get Started For Free"}
          </Button>
          <Button 
            variant='primary' 
            className={styles['trusted--upper__cta__button__primary']}
            icon={faPlay}
          >
            {"Watch Video"}
          </Button>
            </span>
            </div>
        </div>
        <div className={styles['trusted--lower']}>
            <div className={styles['trusted--lower__marketcup']}>
                {/* Pause for now dashboard information */}
            </div>
            {/* dashboard information */}
        </div>
    </div>
  )
}

export default Trusted;