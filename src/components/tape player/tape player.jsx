import styles from './tape player.module.css';
import { useState } from 'react';

import Cassette from '../cassette/cassette';

import walkmanLogo from '../../assets/walkman-logo.svg';
import sonyLogo from '../../assets/sony-logo.svg';

const TapePlayer = () => {

    const [ open, setOpen ] = useState(true);
    const handleOpenClosed = () => 
    open ? setOpen(false) : setOpen(true); 

    return(
        <div className={styles.playerContainer} onClick={handleOpenClosed}>

            <Cassette />

            {open && (
                <div className={styles.walkmanTop}>

                    <div className={styles.topHalf}></div>

                    <div className={styles.mediumHalf}>

                        <div className={styles.sidePiece}>
                            <img src={walkmanLogo} className={styles.walkmanLogo} alt="" />
                        </div>

                        <div className={styles.window}></div>

                        <div className={styles.sidePiece}>
                            <img src={sonyLogo} className={styles.sonyLogo} alt="" />
                        </div>

                    </div>

                    <div className={styles.bottomHalf}></div>

                </div>
            )}

        </div>
    )
}
export default TapePlayer