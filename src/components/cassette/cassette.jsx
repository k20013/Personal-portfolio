import styles from './cassette.module.css';

const Cassette = (status) => {

    return(
        <div className={styles.shell}>

            <div className={styles.shellContent}>

                <h1 className={styles.caveat}>Caleb S Bravo</h1>

                <div>

                    <div className={styles.shellWindow}>
                    
                    </div>

                </div>

                <span className={styles.zeyada}>Full stack developer</span>
            </div>

        </div>
    )
}
export default Cassette