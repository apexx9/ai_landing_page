import React from 'react';
import type { readOnlyButtonProps } from '@/Interfaces/components';
import styles from '@/styles/components/_button.module.scss'




const Button : React.FC<readOnlyButtonProps> = ({ variant, onClick, children, className }) => {
    return (
        <button 
            className={`${styles[`button`]}  ${styles[`button__${variant}`]} ${className}` } 
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
