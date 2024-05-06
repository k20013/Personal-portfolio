import iconDawn from '../../assets/lorem-waifus/Dawn.jpg';
import iconNami from '../../assets/lorem-waifus/Nami.jpg';
import iconRukia from '../../assets/lorem-waifus/Rukia.jpg';
import iconSonia from '../../assets/lorem-waifus/Sonia.jpg';

import { 
    bootstrapIcon, cssIcon, figmaIcon, 
    gitIcon, githubIcon, htmlIcon, 
    javaScriptIcon, nodeJsIcon, postgreIcon,
    reactIcon, sqlIcon 
} from '../../assets/icons/icons';

export default [
    {
        name: "Dawn",
        description: {
            esp: "De Pokemón.",
            en: "From Pokemon."
        },
        img: iconDawn,
        technologies: [htmlIcon, cssIcon, javaScriptIcon],
        linkToWebsite: "#",
        linkToGithub: "https://github.com"
    },{
        name: "Nami",
        description: {
            esp: "La gata ladrona, navegante del rey de los piratas. De One piece",
            en: "The bunglar cat, the pirate's king's navigate. From One piece"
        },
        img: iconNami,
        technologies: [htmlIcon, bootstrapIcon, reactIcon],
        linkToWebsite: "#",
        linkToGithub: "https://github.com"
    },{
        name: "Rukia",
        description: {
            esp: "Una shinigami. De Bleach",
            en: "A shinigami. From Bleach"
        },
        img: iconRukia,
        technologies: [nodeJsIcon, postgreIcon],
        linkToWebsite: "#",
        linkToGithub: "https://github.com"
    },{
        name: "Sonia",
        description: {
            esp: "Una waifu de Pokemón.",
            en: "A prestigious investigater from Pokemon."
        },
        img: iconSonia,
        technologies: [figmaIcon, cssIcon, bootstrapIcon, reactIcon],
        linkToWebsite: "#",
        linkToGithub: "https://github.com"
    }
];