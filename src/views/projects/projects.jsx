import styles from './projects.module.css';

const Projects = () => {

    return(
        <section className={styles.projectsSection}>

            <div className={styles.principalContainer}>
                <div className={styles.numberOne}></div>
                <div className={styles.numberTwo}></div>
                <div className={styles.numberThree}></div>
                <div className={styles.numberFour}></div>
            </div>

            <div className={styles.githubContainer}>

            </div>

        </section>
    )
}
export default Projects