/* Handles Components interfaces */

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
}

{/* Footer Interface */}
//Lower Footer
interface LowerFooterLinks{
    _id: number;
    name: string;
    url: string;
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

/* normal */