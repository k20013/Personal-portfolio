import styles from './projects.module.css';

import projectData from './project.data';
import vinyl from '../../assets/vinyl-record.svg';

const Projects = () => {

    return (
        <section className={styles.projectsSection}>

            <div className={styles.personalProjectsContainer}>

            { projectData.map((project) => {
                
                return(
                    <article className={styles.projectContainer}>

                    <img src={project.img} className={styles.iconImg} alt={project.description} />

                    <img src={vinyl} className={styles.svgImg} alt="" />

                    <div className={styles.content}>
                        <h1>{project.name}</h1>

                        <p>{project.description}</p>

                        <div>
                        <a href={project.linkToWebsite}>
                            <button><span>Website</span></button>
                        </a>

                        <a href={project.linkToGithub}>
                            <button><span>Repository</span></button>
                        </a>
                        </div>
                    </div>

                </article>
                )
            })}

            </div>
            
        </section>
    )
}
export default Projects