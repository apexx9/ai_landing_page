/* Contains the urls for various files */
{/* Type Imports */}
import { makeReadonly } from "./definitions";
import { HeaderLink } from "./definitions";
import { SocialsInterface } from "./definitions";

{/* Main Navigation */}
type readOnlyLink = makeReadonly<HeaderLink>;

export const Links : readOnlyLink [] = [
  {_id: 1,
    name: "About Me",
    url: "/about",
  },
  {_id: 2,
    name: "Skills",
    url: "/skills",
  },
  {_id: 3,
    name: "Projects",
    url: "/projects",
  },
  {_id: 4,
    name: "Blog",
    url: "/blog",
  },
  {_id: 5,
    name: "Contact",
    url: "/contact",
  },
  {_id: 6,
    name: "Subscribe",
    url: "/subscribe",
  },
]




{/* URL to my socials */}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


type readonlySocials = makeReadonly<SocialsInterface>;

export const SOCIALS : readonlySocials[] = [
  {
    _id: 1,
    social: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/aaron-aboagye",
  },
  {
    _id: 2,
    social: "GitHub",
    icon: faGithub,
    url: "https://github.com/apexx9",
  },
  {
    _id: 3,
    social: "Whatsapp",
    icon: faWhatsapp,
    url: "https://www.wa.me/+233257677310",
  },
  {
    _id: 4,
    social: "Twitter",
    icon: faTwitter,
    url: "https://twitter.com/apexx_9",
  },
  {
    _id: 5,
    social: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/__aaro.nn",
  },
  {
    _id: 6,
    social: "Discord",
    icon: faDiscord,
    url: "https://discord.com/users/__aaro.n",
  },
  {
    _id: 7,
    social: "Gmail",
    icon: faEnvelope,
    url: "mailto:aaronnartey001@gmail.com",
  },
]