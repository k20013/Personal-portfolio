import styles from './backstory.module.css';

const Backstory = ({ idiom }) => {

    return (
        <div className={styles.backstory}>
            {
                idiom ? (
                    <p>
                        Con la ayuda y el apoyo de mi familia, me di el lujo de terminar mis estudios escolares
                        y elegir a que dedicarme.<br />
                        Mi inclinación al desarrollo web fue gradual,
                        seguramente influenciado por mi amor a la simpleza de la complejidad
                        y mi fascinación por el orden.<br />
                        <hr />
                        Ahora quiero mostrar mi profesionalismo con mis capacidaes, conocimiento, resposanbilidad y dedicación;
                        y mostrar mi valor personal a travéz de la convivencia y el trabajo en equipo.
                    </p>
                ) : (
                    <p>
                        With the help and support of my family, I had the privilege of finishing my school studies 
                        and choosing my career path.<br />
                        My inclination towards web development was gradual, 
                        surely influenced by my love for the simplicity of complexity 
                        and my fascination for order.<br />
                        <hr />
                        Now I want to show my professionalism with my skills, knowledge, responsibility, 
                        and dedication; and to show my personal value through coexistence and teamwork.
                    </p>
                )
            }
        </div>
    )
}
export default Backstory