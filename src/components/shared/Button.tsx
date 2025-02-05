'use client'

import React from 'react';


{/* Definitions imports */}
import type { ButtonProps } from '@/libs/definitions'; //Interface
import type { makeReadonly } from '@/libs/definitions'; //Type modifier



// Make the ButtonProps readonly using makeReadonly
type readonlyProps = makeReadonly<ButtonProps>;

// Class handler function to return classes based on variant
const classHandler = (variant: 'primary' | 'secondary' | 'large' ) => {
    switch (variant) {
        case 'primary':
            return 'bg-white w-[150px] h-[50px] text-black text-xs px-4 py-2 hover:bg-[#6CFF6C] ';
            break;
        case 'secondary':
            return 'bg-gray-500 w-[150px] h-[50px] text-white px-4 py-2 rounded ';
            break;
        case 'large':
            return '';
            break;
        default:
            return 'bg-gray-200 text-black px-4 py-2 rounded'; // default styling
    }
}

const Button: React.FC<readonlyProps> = ({ variant, onClick, children, className }) => {
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
