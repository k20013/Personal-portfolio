import styles from './formation.module.css';

const Formation = () => {

    return (
        <div className={styles.filesContainer}>

            <a href="https://www.freecodecamp.org/certification/Caleb_S_Bravo/responsive-web-design"
                target='_blank'>
                <article className={`${styles.file} ${styles.hardSkill}`}>
                    <h1>Responsive Web Design</h1>
                    <span>FreeCodeCamp</span>
                </article>
            </a>

        </div>
    )
}
export default Formation