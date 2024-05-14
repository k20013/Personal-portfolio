import styles from './backstory.module.css';

const Backstory = ({ idiom }) => {

    return (
        <div className={styles.backstory}>
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
        </div>
    )
}
export default Backstory