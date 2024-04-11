import styles from './contact.module.css';

import LinkedinBtn from './linkedin-btn/linkedin-btn';
import WhatssapBtn from './whatssapp-btn/whatssapp-btn';
import GithubBtn from './github-btn/github-btn';
import MailBtn from './mail-btn/mail-btn';

const Contact = () => {

    return(
        <div className={styles.contactContainer}>

            <a href="https://github.com/k20013" target="_blank">
                <GithubBtn />
            </a>
            <a href="https://www.linkedin.com/in/caleb-bravo-228684204/" target="_blank">
                <LinkedinBtn />
            </a>
            <a href="https://wa.me/+5491162622680" target="_blank">
                <WhatssapBtn />
            </a>
            <a href="mailto:calebphone72@gmail.com?subject=Contact from portfolio">
                <MailBtn />
            </a>            
        </div>
    )
}
export default Contact