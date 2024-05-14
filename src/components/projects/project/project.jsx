import styles from './project.module.css';

import vinylArray from '../../../assets/vinyl/vinyl';

const Project = ({ content, idiom, prevHandler, nextHandler }) => {

    const { name, description, img, linkToWebsite, linkToGithub } = content;

    return (
        <article className={styles.projectContainer}>

            <div className={styles.oneAuxContainer}>
                <div className={styles.titleContainer}>
                    <h1>{name}</h1>
                </div>
                <div className={styles.descriptionContainer}>
                    <p>{
                        idiom ? description.esp : description.en    
                    }</p>
                </div>
                <div className={styles.prevNext}>

                    <div onClick={prevHandler}>
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M6 15l5-5-5-5 1-2 7 7-7 7z"></path> </g> </g></svg>
                    </div>

                    <div onClick={nextHandler}>
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M6 15l5-5-5-5 1-2 7 7-7 7z"></path> </g> </g></svg>
                    </div>

                </div>
            </div>

            <div className={styles.twoAuxContainer}>

                <div className={styles.imgContainer}>

                    <img src={
                        vinylArray[Math.floor(Math.random() * vinylArray.length)]
                    } className={styles.vinyl} alt="" />

                    <img src={img} className={styles.picture} alt="" />

                </div>

                <div className={styles.linksContainer}>

                    <a href={linkToWebsite}>
                        <div>
                        <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>link_round [#1110]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -3279.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M342.238743,3120.76128 C339.890401,3118.41291 336.082738,3118.41291 333.734396,3120.76128 L331.165552,3123.33016 L332.582776,3124.7474 L335.15162,3122.17852 C336.718184,3120.61194 339.253953,3120.61194 340.821519,3122.17852 C342.384074,3123.7421 342.384074,3126.28491 340.821519,3127.84849 L338.252675,3130.41737 L339.669899,3131.83461 L342.238743,3129.26573 C344.587086,3126.91736 344.587086,3123.10965 342.238743,3120.76128 L342.238743,3120.76128 Z M332.84838,3135.82073 C332.091659,3136.57846 331.084367,3136.99541 330.013932,3136.99541 C328.943496,3136.99541 327.936205,3136.57846 327.179483,3135.82073 C325.615926,3134.25815 325.615926,3131.71433 327.179483,3130.15176 L329.748327,3127.58288 L328.330101,3126.16464 L325.761257,3128.73352 C323.412914,3131.08189 323.412914,3134.8896 325.761257,3137.23897 C326.935929,3138.41266 328.474429,3139 330.013932,3139 C331.553434,3139 333.091934,3138.41266 334.266607,3137.23897 L336.835451,3134.6701 L335.417224,3133.25185 L332.84838,3135.82073 Z M336.263149,3125.31971 L337.680373,3126.73695 L331.721817,3132.69558 L330.304593,3131.27834 L336.263149,3125.31971 Z" id="link_round-[#1110]"> </path> </g> </g> </g> </g></svg>                        </div>
                    </a>

                    <a href={linkToGithub}>
                        <div>
                            <svg version="1.1" id="svg2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" sodipodi:docname="github.svg" inkscape:version="0.48.4 r9939" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="path10015" inkscape:connector-curvature="0" d="M600,0C268.629,0,0,268.629,0,600s268.629,600,600,600 s600-268.629,600-600S931.371,0,600,0z M600,65.332c295.289,0,534.668,239.379,534.668,534.668S895.289,1134.668,600,1134.668 S65.332,895.289,65.332,600S304.711,65.332,600,65.332z M334.644,221.924c-15.228,44.26-20.507,92.298-6.885,134.253 c-16.457,18.264-29.235,39.243-38.379,62.988c-24.371,77.026-18.418,175.425,34.937,234.961 c18.743,20.548,44.172,37.441,76.172,50.684c31.999,13.241,73.127,21.688,123.413,25.343 c-33.751,15.771-57.543,25.406-65.846,60.277c-37.646,25.156-83.427,19.153-116.602-8.203 c-26.217-19.143-38.094-53.164-67.163-65.771c-1.828-1.826-7.539-3.188-17.139-4.103c-9.6-0.913-17.146,1.811-22.632,8.203 c-2.743,2.739-2.541,5.666,0.659,8.862c22.006,17.897,43.187,36.867,55.591,59.619c11.886,24.657,24.188,42.711,36.987,54.126 c35.507,23.993,83.126,36.476,124.806,21.24c-4.86,29.329,8.252,75.13-1.393,101.367c-3.658,7.306-8.89,13.71-15.747,19.188 c-6.111,5.962-25.06,13.42-21.24,22.56c1.828,4.108,8.219,6.631,19.189,7.544c24.151-0.616,48.193-10.382,62.402-29.443 c5.028-6.85,7.544-15.774,7.544-26.733V846.607c0-12.785,2.717-21.913,8.203-27.394c5.484-5.479,11.471-9.16,17.87-10.985v147.948 c0,12.785-1.155,23.753-3.441,32.886c-2.286,9.134-4.324,15.536-6.152,19.189c-4.197,7.039-12.221,13.535-12.378,21.899 c0,2.738,1.635,4.305,4.834,4.761c24.021-1.042,51.889-15.133,61.67-34.938c7.771-16.438,11.646-33.736,11.646-52.002V802.734 h30.176v145.238c0,18.266,4.149,35.563,12.378,52.002c8.229,16.439,21.962,27.002,41.162,31.567 c10.057,2.74,16.85,3.826,20.508,3.369c3.657-0.457,5.291-2.021,4.834-4.761c-2.202-8.299-6.791-15.397-11.646-21.899 c-6.4-8.219-9.596-25.591-9.596-52.075V808.229c6.4,1.825,12.588,5.507,18.53,10.985c5.942,5.479,8.862,14.607,8.862,27.394v112.279 c0,10.959,2.515,19.885,7.544,26.733c15.283,19.437,38.314,29.297,62.401,29.443c10.973-0.913,17.361-3.436,19.189-7.544 c1.828-4.109,0.47-7.516-4.102-10.255s-10.281-6.824-17.14-12.305c-6.857-5.479-12.09-11.884-15.747-19.188 c-4.104-47.109-0.104-97.608-3.441-145.239c-6.589-51.979-26.597-69.079-66.504-88.989c47.543-3.653,86.633-12.376,117.261-26.074 c91.558-44.484,116.875-113.258,117.261-205.443c-1.444-59.33-18.57-111.086-57.642-150.732c5.484-21.004,7.12-42.867,4.834-65.698 c-2.286-22.831-7.115-43.405-14.43-61.67c-33.824,1.826-62.174,8.635-85.033,20.508c-22.857,11.873-39.31,21.957-49.365,30.176 c-81.016-18.393-167.743-18.503-245.436,2.71C430.68,242.803,381.41,224.688,334.644,221.924L334.644,221.924z"></path> </g></svg>
                        </div>
                    </a>

                </div>
            </div>
        </article>
    )
}
export default Project 