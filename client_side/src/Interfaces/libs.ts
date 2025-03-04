import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Logo{
    _id: number;
    name: string;
    src: IconDefinition;
}







//readonly types
type makeReadOnly <T> ={
    readonly [K in keyof T] : T[K];
}


//makereadonly
export type readOnlyLogoProps = makeReadOnly<Logo>;