import styles from './formation.module.css';

import {
    bootstrapIcon, cssIcon, figmaIcon,
    gitIcon, githubIcon, htmlIcon,
    javaScriptIcon, nodeJsIcon, postgreIcon,
    reactIcon, sqlIcon
} from '../../assets/icons/icons';

const Formation = () => {

    return (
        <section className={styles.formationSection}>

            <div>
                <div className={styles.techContainer}>

                    <div className={styles.iconsContainer}>
                        <img src={htmlIcon} alt="html" />
                        <img src={cssIcon} alt="css" />
                        <img src={javaScriptIcon} alt="JavaScript" />
                    </div>

                    <div className={styles.auxIconsContianer}>
                        <div className={styles.iconsContainer}>
                            <img src={reactIcon} alt="react" />
                            <img src={bootstrapIcon} alt="bootstrap" />
                            <img src={figmaIcon} alt="figma" />
                        </div>

                        <div className={styles.iconsContainer}>
                            <img src={nodeJsIcon} alt="nodejs" />
                        </div>

                        <div className={styles.iconsContainer}>
                            <img src={sqlIcon} alt="sql" />
                            <img src={postgreIcon} alt="postgre" />
                        </div>

                        <div className={styles.iconsContainer}>
                            <img src={gitIcon} alt="git" />
                            <img src={githubIcon} alt="gtihub" />
                        </div>
                    </div>

                </div>

                <div className={styles.filesContainer}>

                    <a href="https://www.freecodecamp.org/certification/Caleb_S_Bravo/responsive-web-design"
                        target='_blank'>
                        <article className={styles.file}>
                            <h1>Responsive Web Design</h1>
                            <span>FreeCodeCamp</span>
                        </article>
                    </a>

                </div>
            </div>

        </section>
    )
}
export default Formation