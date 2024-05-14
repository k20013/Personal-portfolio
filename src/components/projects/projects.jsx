import styles from './projects.module.css';
import { useState } from 'react';

import projectData from './project.data';
import Project from './project/project';

const Projects = ({ idiom }) => {

    const [current, setCurrent] = useState(0);

    return (
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
                } idiom={idiom}
            />

        </div>
    )
}
export default Projects