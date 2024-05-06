import styles from './projects.module.css';
import { useState } from 'react';

import projectData from './project.data';
//import vinyl from '../../assets/vinyl-record.svg';
import Project from '../../components/project/project';

const Projects = ({ idiom }) => {

    const [ current, setCurrent ] = useState(0);

    return (
        <section className={styles.projectsSection}>

            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill" fill="#657363" fill-opacity="1"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill" fill="#657363" fill-opacity="1"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill" fill="#657363" fill-opacity="1"></path></svg>

            <div>

                <div className={styles.contentContainer}>

                    <Project content={projectData[current]}
                        prevHandler={
                            () => {
                                current - 1 >= 0 ? setCurrent(current - 1)
                                : setCurrent(projectData.length - 1)
                            }
                        }
                        nextHandler={
                            () => {
                                current + 1 < projectData.length ? setCurrent(current + 1)
                                : setCurrent(0) 
                            }
                        }  idiom={idiom}
                    />

                </div>

                <div className={styles.info}>
                    <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#FCFCFC"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#FFFFFF"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>

                    <div>
                        {idiom ? 
                        <p>
                            Visita mi cuenta de Github para ver más codigo, 
                            repositorios y projectos en los que estoy trabajando.
                        </p>
                        :
                        <p>
                            Please, check my Github account.
                            There you can see more code, repositories and projects that I'm developping.
                        </p>}
                    </div>

                    <a href="https://github.com/k20013" target='_blank'>
                        <div>K20013</div>
                    </a>

                </div>

            </div>

        </section>
    )
}
export default Projects

/*
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
*/