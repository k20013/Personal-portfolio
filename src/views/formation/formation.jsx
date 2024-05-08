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

                    <div> {/* Basico */}
                        <span title='HTML'>
                            <img src={htmlIcon} alt="html icon" />
                        </span>
                        <span title='CSS'>
                            <img src={cssIcon} alt="css icon" />
                        </span>
                        <span title='JavaScript'>
                            <img src={javaScriptIcon} alt="JavaScript icon" />
                        </span>
                    </div>
                    <div> {/* Frontend */}
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
                    <div> {/* Backend */}
                        <span title='Node JS'>
                            <img src={nodeJsIcon} alt="nodejs icon" />
                        </span>
                    </div>
                    <div> {/* Base de datos */}
                        <span title='SQL Databases'>
                            <img src={sqlIcon} alt="sql icon" />
                        </span>
                        <span title='Postgre'>
                            <img src={postgreIcon} alt="postgre icon" />
                        </span>
                    </div>
                    <div> {/* Otro */}
                        <span title='Git'>
                            <img src={gitIcon} alt="git icon" />
                        </span>
                        <span title='Github'>
                            <img src={githubIcon} alt="gtihub icon" />
                        </span>
                    </div>

                </div>

                <div className={styles.filesContainer}>

                    <a href="https://www.freecodecamp.org/certification/Caleb_S_Bravo/responsive-web-design"
                        target='_blank'>
                        <article className={`${styles.file} ${styles.hardSkill}`}>
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