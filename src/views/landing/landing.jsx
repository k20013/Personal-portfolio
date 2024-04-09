import styles from './landing.module.css';

const Landing = ({ idiom }) => {

    return(
        <section className={styles.landingContainer}>

            <div className={styles.textContainer}>
                <h1>Caleb Santiago Bravo</h1>

                { idiom ? <span>Desarrollador web full-stack</span>
                    : <span>Full-stack web developer</span>
                }

            </div>

        </section>
    )
}
export default Landing