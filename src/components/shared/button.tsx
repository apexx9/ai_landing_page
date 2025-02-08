import React from 'react';
import type { readOnlyButtonProps } from '@/Interfaces/components';
import styles from '@/styles/components/_button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Button: React.FC<readOnlyButtonProps> = ({ variant, onClick, children, className, icon }) => {
    return (
      <button 
        className={`${styles[`button`]} ${styles[`button__${variant}`]} ${className}`} 
        onClick={onClick}
      >
        {icon && (
          <span className={styles['button__icon']}>
            <FontAwesomeIcon icon={icon} 
            style={{width: "20px", height: "20px"}}
            />
          </span>
        )}
        {children} 
      </button>
    );
  };
  
  export default Button;