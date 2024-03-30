import styles from './projects.module.css';
import { useState } from 'react';

import projectsData from './projects.data.js';

const Projects = ({ idiom }) => {
    const data = idiom === "ESP" ? projectsData.ESP : projectsData.EN;

    const [ kindOfProject, setKindOfProject ] = useState("Principal"); // || Other

    const [ principalIndex, setPrincipalIndex ] = useState(0);

    return(
        <section className={styles.projectsSection}>

            <div className={styles.projectsContainer}>
                {kindOfProject === "Principal" ?

                   (<div className={styles.principalProyects}>

                    <article className={styles.principalProyectCard}>

                        <h1>{data.principalProjects[principalIndex].name}</h1>

                        <p>{data.principalProjects[principalIndex].description}</p>

                        { data.principalProjects[principalIndex.img] && <img src="" alt="" />}

                        { data.principalProjects[principalIndex].link && 
                        <a href={data.principalProjects[principalIndex].link}></a>}

                        <a href={data.principalProjects[principalIndex].repository}></a>

                    </article>

                   </div>)
                   : 
                   (<div>
                       {data.secondProjects.map(({name, description, img, link, repository}) => {
                            return(
                                <article className={styles.otherProjectCard}>
                                    <h1>{name}</h1>
                                    <p>{description}</p>
                                    {img && <img src='' alt='' />}
                                    {link && <a href={link}>Link ot this website</a>}
                                    <a href={repository}>Repository</a>
                                </article>
                            )
                        })}
                   </div>)
                }
            </div>

            <div className={styles.secondContainer}>

                {kindOfProject === "Principal" && (<div>
                    <button onClick={() => {
                        if(principalIndex < data.principalProjects.length - 1) {
                            setPrincipalIndex(principalIndex + 1);
                        } else setPrincipalIndex(0);}}>
                        Next
                    </button>
                </div>)}

                <button onClick={() => setKindOfProject("Principal")}>
                    Principal projects
                </button>

                <button onClick={() => setKindOfProject("Others")}>
                    Others projects
                </button>

            </div>

        </section>
    )
}
export default Projects

/*
<article className={styles.principalProjects}>
                                <h1>{name}</h1>

                                <p>{description}</p>

                                {img && <img src={img} alt="" />}

                                {link && <a href={link}>Link ot this website</a>}

                                <a href={repository}>Repository</a>

                            </article>
*/