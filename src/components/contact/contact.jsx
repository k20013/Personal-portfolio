import styles from './contact.module.css';

import InstagramBtn from './instagram-btn/instagram-btn';
import LinkedinBtn from './linkedin-btn/linkedin-btn';
import WhatssapBtn from './whatssapp-btn/whatssapp-btn';
import GithubBtn from './github-btn/github-btn';
//import MailBtn from './mail-btn/mail-btn';

const Contact = () => {

    return(
        <div className={styles.contactContainer}>
            
            <InstagramBtn />
            <LinkedinBtn />
            <GithubBtn />
            <WhatssapBtn />
        </div>
    )
}
export default Contact