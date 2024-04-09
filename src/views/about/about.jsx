import styles from './about.module.css';
import { useState } from 'react';

const About = ({ idiom }) => {

    const [ information, setInformation ] = useState("Personal description")
    /* Personal description || Work experience || About me || Hobbies  */

    return(
        <section className={styles.aboutContainer}>

            <div className={styles.halfOfWalkman}>
                <nav>
                     
                    <button onClick={() => setInformation("Personal description")}>
                        { idiom ? "Descripción personal" : "Personal description" }
                    </button>

                    <button onClick={() => setInformation("Work experience")}>
                        { idiom ? "Experiencia laboral" : "Work experience" }
                    </button>

                    <button onClick={() => setInformation("About me")}>
                        { idiom ? "Sobre mí" : "About me" }
                    </button>

                    <button onClick={() => setInformation("Hobbies")}>
                        Hobbies
                    </button>

                </nav>
            </div>

            <div className={styles.halfOfInformation}>

                <div className={styles.informationContainer}>

                    { information === "Personal description" && (<section>
                        <h1>{ idiom ? "Descripción personal" : "Personal description" }</h1>
                    </section>) }

                    { information === "Work experience" && (<section>
                        <h1>{ idiom ? "Experiencia laboral" : "Work experience" }</h1>
                    </section>) }

                    { information === "About me" && (<section>
                        <h1>{ idiom ? "Sobre mí" : "About me" }</h1>
                    </section>) }

                    { information === "Hobbies" && (<section>
                        <h1>Hobbies</h1>
                    </section>) }

                </div>

            </div>

        </section>
    )
}
export default About