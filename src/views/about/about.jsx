import styles from './about.module.css';

const About = ({ idiom }) => {

    return (
        <section className={styles.aboutSection}>

            <div className={styles.infoContainer}>
                <a href="">
                    <div className={styles.cvBtn}>
                        <span>Ver CV</span>
                    </div>
                </a>
                <div>
                    <p>
                        Con la ayuda y el apoyo de mi familia, me di el lujo de terminar mis estudios escolares
                        y elegir a que dedicarme.<br />
                        Mi inclinación al desarrollo web fue gradual,
                        seguramente influenciado por mi amor a la simpleza de la complejidad
                        y mi fascinación por el orden.<br />
                        Ahora quiero mostrar mi profesionalismo con mis capacidaes, conocimiento, resposanbilidad y dedicación;
                        y mostrar mi valor personal a travéz de la convivencia y el trabajo en equipo.
                    </p>
                </div>
            </div>

            <div className={styles.contentContainer}>
                <article className={`${styles.contentCard}`}>
                    <code>
                        
                    </code>
                </article>

                <article className={`${styles.contentCard}`}>

                </article>
            </div>

        </section>
    )
}
export default About

/*
    Con la ayuda y el apoyo de mi familia, me di el lujo de terminar mis estudios escolares 
                    y elegir a que dedicarme.<br />
                    Mi inclinación al desarrollo web fue gradual, 
                    seguramente influenciado por mi amor a la simpleza de la complejidad 
                    y mi fascinación por el orden.<br />
                    Ahora quiero mostrar mi profesionalismo con mis capacidaes, conocimiento, resposanbilidad y dedicación;
                    y mostrar mi valor personal a travéz de la convivencia y el trabajo en equipo.
*/