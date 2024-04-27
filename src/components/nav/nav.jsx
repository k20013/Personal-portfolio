import styles from './nav.module.css';
import { useState } from 'react';

import Contact from '../contact/contact';

const Nav = ({ idiom, idiomHandler }) => {

    const [isActive, setIsActive] = useState(false);

    return (

        <nav className={`${styles.navBar} ${isActive ? styles.activeNav : ""}`}>

            <button className={styles.menuBtn}
                onClick={() => setIsActive(!isActive)}
            >
                {isActive ? (<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg>)
                :(<svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path class="st0" d="M495.957,390.227H16.044C7.185,390.227,0,397.401,0,406.249v26.685c0,54.749,114.619,47.804,256,47.804 s256-2.185,256-47.804v-26.685C512,397.401,504.815,390.227,495.957,390.227z"></path> <path class="st0" d="M42.934,353.858h426.13c15.913,0,28.794-12.891,28.794-28.794v-25.272c0-15.891-12.881-28.771-28.794-28.771 H430.37l-61.163,61.152c-15.652,15.662-41.033,15.662-56.696,0l-61.152-61.152H42.934c-15.913,0-28.793,12.88-28.793,28.771v25.272 C14.141,340.967,27.022,353.858,42.934,353.858z"></path> <path class="st0" d="M256,30.977c-141.38,0-256,74.13-256,172.554v20.739c0,8.848,7.185,16.032,16.044,16.032h479.913 c8.858,0,16.043-7.185,16.043-16.032v-20.739C512,105.107,397.38,30.977,256,30.977z M128.706,144.118 c-9.38,0-16.967-7.586-16.967-16.967c0-9.37,7.587-16.978,16.967-16.978c9.37,0,16.978,7.609,16.978,16.978 C145.684,136.532,138.076,144.118,128.706,144.118z M205.076,93.205c-9.37,0-16.967-7.598-16.967-16.967 c0-9.381,7.598-16.967,16.967-16.967c9.38,0,16.978,7.586,16.978,16.967C222.054,85.608,214.456,93.205,205.076,93.205z M256,161.097c-9.37,0-16.978-7.609-16.978-16.978c0-9.37,7.609-16.967,16.978-16.967c9.37,0,16.978,7.598,16.978,16.967 C272.978,153.488,265.369,161.097,256,161.097z M306.924,93.205c-9.38,0-16.978-7.598-16.978-16.967 c0-9.381,7.598-16.967,16.978-16.967c9.37,0,16.967,7.586,16.967,16.967C323.891,85.608,316.293,93.205,306.924,93.205z M383.293,144.118c-9.37,0-16.978-7.586-16.978-16.967c0-9.37,7.609-16.978,16.978-16.978c9.381,0,16.967,7.609,16.967,16.978 C400.26,136.532,392.674,144.118,383.293,144.118z"></path> </g> </g></svg>)
                }
            </button>

            <Contact />

            <a href="#">
                <div className={styles.navBtn}>
                    <svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 489.49 489.49" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M230.232,299.526v16.14h28.823v-16.093c-4.724,0.9-9.509,1.392-14.326,1.392 C239.849,300.964,235.017,300.448,230.232,299.526z"></path> <path d="M379.665,276.481l-59.084-17.618c-3.816,4.779-7.806,9.133-11.935,13.153l66.452,19.815 c6.475,1.932,10.838,7.774,10.838,14.537v25.915c0,73.169-55.957,133.497-127.32,140.489l16.657-39.334L259.259,326.34h-29.027 l-16.015,107.099l16.655,39.334c-71.363-6.992-127.32-67.32-127.32-140.489v-25.915c0-6.763,4.363-12.605,10.854-14.537 l66.421-19.807c-4.128-4.02-8.116-8.374-11.933-13.153l-59.07,17.61c-13.23,3.941-22.286,16.093-22.286,29.887v25.915 c0,86.822,70.377,157.207,157.208,157.207c86.83,0,157.207-70.385,157.207-157.207v-25.915 C401.952,292.574,392.898,280.422,379.665,276.481z"></path> <g> <path d="M346.436,131.318c4.533-6.219,7.981-17.92,7.722-34.829c-0.094-5.686-0.594-12.065-1.688-19.378 c-8.759-58.257-102.753-104.088-144.133-58.718c0,0-31.701-6.342-54.723,26.189c-9.307,13.153-22.771,39.576-21.537,61.667 c0.527,9.449,3.731,18.496,11.162,24.975c-7.879,3.254-13.811,10.605-16.4,20.387c-2.455,9.329-1.814,20.206,1.814,30.614 c5.725,16.438,17.906,28.519,31.17,31.224c16.468,35.33,46.762,71.503,84.905,71.503c38.113,0,68.407-36.118,84.874-71.424 c13.06-2.558,25.447-14.709,31.232-31.302C368.573,159.92,362.24,137.973,346.436,131.318z M244.729,268.935 c-14.591,0-27.915-7.327-39.505-18.126l9.181-25.836c3.378-9.492,12.355-15.834,22.427-15.834h15.904 c10.072,0,19.05,6.342,22.428,15.834l9.165,25.758C272.708,261.577,259.367,268.935,244.729,268.935z M345.712,176.961 c-4.771,13.669-14.465,21.042-21.348,21.042c-3.957,0.314-6.208,1.847-7.491,4.809c-7.194,16.524-17.751,33.532-30.622,46.208 c3.957-6.662,6.35-14.303,6.35-22.528c0-25.337-21.426-45.887-47.872-45.887c-26.415,0-47.841,20.55-47.841,45.887 c0,8.217,2.379,15.866,6.334,22.544c-12.871-12.676-23.428-29.691-30.639-46.224c-1.266-2.924-4.486-4.809-7.679-4.809 c-6.692,0-16.374-7.373-21.128-21.042c-2.55-7.335-3.082-15.084-1.454-21.263c0.798-2.979,2.799-8.217,7.46-9.836 c0.5-0.173,1.485-0.274,1.971-0.32c3.564-0.344,6.175-3.048,6.962-6.448c1.934-8.348,16.021-53.501,55.502-61.983 c0,0,84.859,57.389,93.539,21.355c0,0,18.035,13.463,22.849,40.693c0.603,3.407,3.566,6.038,7.101,6.382 c0.485,0.046,1.47,0.147,1.985,0.32C346.777,148.332,350.999,161.719,345.712,176.961z"></path> </g> </g> </g></svg>

                    <span>Curriculum</span>
                </div>
            </a>

            <div className={styles.navBtn} onClick={idiomHandler}>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="bi bi-translate"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"></path> <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"></path> </g></svg>
                <span>{idiom ? "Español" : "English"}</span>
            </div>

        </nav>

    )
}
export default Nav