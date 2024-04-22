import styles from './about.module.css';
import { useState } from 'react';

import locationIcon from '../../assets/location.svg';

const About = ({ idiom }) => {

    return(
        <section className={styles.aboutContainer}>

            <div className={styles.auxBg}></div>

            <div className={styles.infoContainer}>

                <div className={styles.tittleArea}>
                    <h1>About</h1>
                </div>

                <div className={styles.descriptionArea}>
                    Con la ayuda y el apoyo de mi familia, me di el lujo de terminar mis estudios escolares 
                    y elegir a que dedicarme.<br />
                    Mi inclinación al desarrollo web fue gradual, 
                    seguramente influenciado por mi amor a la simpleza de la complejidad 
                    y mi fascinación por el orden.<br />
                    Ahora quiero mostrar mi profesionalismo con mis capacidaes, conocimiento, resposanbilidad y dedicación;
                    y mostrar mi valor personal a travéz de la convivencia y el trabajo en equipo.
                </div>

                <div className={styles.softSkillsArea}>4</div>

                <div className={styles.ageCountryArea}>
                    <img src={locationIcon} alt="" />
                    <span>Buenos Aires, Argentina</span>
                </div>

            </div>

        </section>
    )
}
export default About