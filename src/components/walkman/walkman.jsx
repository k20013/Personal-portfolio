import styles from './walkman.module.css';

import walkmanLogo from '../../assets/walkman-logo.svg';

const Walkman = () => {

    return(
        <div className={styles.walkmanContainer}>

            <div className={styles.area1} name='blue-side'>

                <div className={styles.leftSide} name='left-side'>
                    
                    <img src={walkmanLogo} className={styles.walkmanLogo} alt="" />

                </div>

                <div className={styles.rightSide} name='right-side'>
                    
                </div>

            </div>

            <nav>
            
            </nav>

        </div>
    )
}
export default Walkman

//