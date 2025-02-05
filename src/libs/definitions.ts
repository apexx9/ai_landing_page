/*Components */

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/*Header Links */
export interface HeaderLink {
    _id: number;
    name: string;
    url: string;
}

/* Button Props*/
// Define the type of props the Button component will receive
export interface ButtonProps {
    variant: 'primary' | 'secondary' | 'large'; // restricts variant to specific values
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

/* ProgressBarProps */
export interface PageProgressBarProps {
    currentPage: number;
    totalPages: number;
    onClick?: (page: number) => void;
  }

/* Socials Interface */
export interface SocialsInterface{
  _id: number;
  social: string;
  icon: IconDefinition;
  url: string;
}




  /* Type modifications */
  /* Type modifier making the types/interfaces readonly */
export type makeReadonly <T> ={
    readonly [K in keyof T] : T[K];
  }