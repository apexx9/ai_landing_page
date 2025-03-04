import type { readOnlyLogoProps } from "@/Interfaces/libs";
import { faApple, faAws, faBitbucket, faBluesky, faDev, faDeviantart, faDiscord, faGithub, faGitlab, faGoogle, faKickstarter, faMeta } from "@fortawesome/free-brands-svg-icons";

const logo: readOnlyLogoProps[] = [

    {
        _id: 1,
        name: 'Google',   
        src: faGoogle,
    },

    {
        _id: 2, 
        name: 'Meta', 
        src: faMeta,
    },

    {
        _id: 3,  
        name: 'Deviantart', 
        src: faDeviantart,
    },

    {
        _id: 4,  
        name: 'Dev', 
        src: faDev
    },

    {
        _id: 5,  
        name: 'Github', 
        src: faGithub
    },

    {
        _id: 6,  
        name: 'Bitbucket', 
        src: faBitbucket
    },

    {
        _id: 7,  
        name: 'Gitlab', 
        src: faGitlab
    },

    {
        _id: 8,  
        name: 'AWS', 
        src: faAws
    },

    {
        _id: 9,  
        name: 'BlueSky', 
        src: faBluesky
    },

    {
        _id: 10, 
        name: 'Kickstarter', 
        src: faKickstarter
    },

    {
        _id: 11, 
        name: 'Discord', 
        src: faDiscord
    },

    {
        _id: 12, 
        name: 'Apple', 
        src: faApple
    },

];

export default logo;