import styles from './technologies.module.css';

import {
    bootstrapIcon, cssIcon, figmaIcon,
    gitIcon, githubIcon, htmlIcon,
    javaScriptIcon, nodeJsIcon, postgreIcon,
    reactIcon
} from '../../assets/icons/icons';

export const BasicTech = () => {

    return (
        <div className={styles.tech}>
            <span title='HTML'>
                <img src={htmlIcon} alt="html icon" />
            </span>
            <span title='CSS'>
                <img src={cssIcon} alt="css icon" />
            </span>
            <span title='JavaScript'>
                <img src={javaScriptIcon} alt="JavaScript icon" />
            </span>
            <span title='Git'>
                <img src={gitIcon} alt="git icon" />
            </span>
        </div>
    )
}

export const FrontendTech = () => {

    return (
        <div className={styles.tech}>
            <span title='React'>
                <img src={reactIcon} alt="react icon" />
            </span>
            <span title='Bootstrap'>
                <img src={bootstrapIcon} alt="bootstrap icon" />
            </span>
            <span title='Figma'>
                <img src={figmaIcon} alt="figma icon" />
            </span>
        </div>
    )
}

export const BackendTech = () => {

    return (
        <div className={styles.tech}>
            <span title='Node JS'>
                <img src={nodeJsIcon} alt="nodejs icon" />
            </span>
        </div>
    )
}

export const DatabaseTech = () => {

    return (
        <div className={styles.tech}>
            <span title='Postgre'>
                <img src={postgreIcon} alt="postgre icon" />
            </span>
        </div>
    )
}