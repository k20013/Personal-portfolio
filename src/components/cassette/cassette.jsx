import styles from './cassette.module.css';

import cassette from '../../assets/cassette.svg';

const Cassette = () => {

    return(
        <div className={styles.cassetteContainer}>
            <img src={cassette} alt="" />
        </div>
    )
}
export default Cassette