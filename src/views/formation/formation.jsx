import styles from './formation.module.css';

const Formation = ({ idiom }) => {

    return(
        <section className={styles.formationSection}>

            <div className={styles.formationContainer}>
                <div className={styles.skillsContainer}>
                    <h3>{ idiom === "ESP" ? "Habilidades" : "Skills" }</h3>

                    <div className={styles.filesContainer}>

                        <article>
                            <h2>Titulo</h2>
                            <h3>Institucion</h3>
                            <span>+</span>                            
                        </article>
                        <article>
                            <h2>Titulo</h2>
                            <h3>Institucion</h3>
                            <span>+</span>                            
                        </article>
                        <article>
                            <h2>Titulo</h2>
                            <h3>Institucion</h3>
                            <span>+</span>                            
                        </article>

                    </div>

                </div>

                <div className={styles.techFormation}>
                    <h3>{ idiom === "ESP" ? "Formación" : "Formation" }</h3>

                    <div className={styles.filesContainer}>

                    <article>
                            <h2>Titulo</h2>
                            <h3>Institucion</h3>
                            <span>+</span>                            
                        </article>
                        <article>
                            <h2>Titulo</h2>
                            <h3>Institucion</h3>
                            <span>+</span>                            
                        </article>
                        <article>
                            <h2>Titulo</h2>
                            <h3>Institucion</h3>
                            <span>+</span>                            
                        </article>
                        <article>
                            <h2>Titulo</h2>
                            <h3>Institucion</h3>
                            <span>+</span>                            
                        </article>
                        <article>
                            <h2>Titulo</h2>
                            <h3>Institucion</h3>
                            <span>+</span>                            
                        </article>
                        <article>
                            <h2>Titulo</h2>
                            <h3>Institucion</h3>
                            <span>+</span>                            
                        </article>
                        <article>
                            <h2>Titulo</h2>
                            <h3>Institucion</h3>
                            <span>+</span>                            
                        </article>

                    </div>

                </div>
            </div>

        </section>
    )
}
export default Formation