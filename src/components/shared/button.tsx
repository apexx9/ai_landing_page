import React from 'react';
import type { readOnlyButtonProps } from '@/Interfaces/components';
import styles from '@/styles/components/_button.module.scss'



// Class handler function to return classes based on variant
const classHandler = (variant: 'primary' | 'secondary' | 'large' ) => {
    switch (variant) {
        case 'primary':
            return  styles['button__primary'];
            break;
        case 'secondary':
            return styles['button__secondary'];
            break;
        case 'large':
            return '';
            break;
        default:
            return ''; // default styling
    }
}

const Button: React.FC<readOnlyButtonProps> = ({ variant, onClick, children, className }) => {
    return (
        <button 
            className={`${variant}__button ` + classHandler(variant) + className} 
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
