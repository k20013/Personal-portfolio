import styles from './landing.module.css';
import { ReactTyped } from "react-typed";

const Landing = ({ idiom }) => {

    const spanishPresentaition = ["Diseñador web", "Desarrollador Fullstack", "Genio de la programación", "A tu servicio"];
    const englishPresentation = ["Web designer", "Fullstack developer", "Rockstar programmer", "Here to serve you"];

    return (
        <section className={styles.landingContainer}>

            <div className={styles.leftContainer}>

                <h1>Caleb Santiago Bravo</h1>

                <div className={styles.specialization}>

                    <ReactTyped
                        strings={ idiom ? spanishPresentaition : englishPresentation}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />

                        <div class={styles.dividerBottom}>
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class={styles.shapeFill}></path>
                            </svg>
                        </div>
                </div>

            </div>

            <div className={styles.rightContainer}></div>

        </section>
    )
}
export default Landing