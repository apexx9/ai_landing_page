/* Handles Components interfaces */

import { IconProp } from '@fortawesome/fontawesome-svg-core';

{/* Header Interface */}
interface Header{
    _id: number;
    name: string;
    url: string;
}


{/* Button Interface */}

interface ButtonProps{
    variant: 'primary' | 'secondary' | 'large';
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    icon?: IconProp;
}

{/* Footer Interface */}
//Upper Footer
interface UpperFooterLinks{
    _id: number;
    header: string;
    links: Header[];
};
//Lower Footer
interface LowerFooterLinks extends Header{
    //nothing here since it takes the same properties as Header
}









{/* Type modifications */}

type makeReadOnly<T> = {
    readonly [K in keyof T] : T[K];
}


{/* Exports */}
/* modified */
export type readOnlyButtonProps = makeReadOnly<ButtonProps>;
export type readOnlyHeaderLinks = makeReadOnly<Header>;
export type readOnlyLowerFooterLinks = makeReadOnly<LowerFooterLinks>;
export type readOnlyUpperFooterLinks = makeReadOnly<UpperFooterLinks>;

/* normal */