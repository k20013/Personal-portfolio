import styles from './mail-btn.module.css';
import { useState } from 'react';
import { Resend } from 'resend';

const resend = new Resend('re_QA8fkfE6_JeXrD89stVH2GfTcgJ1BQYmQ');

const MailBtn = () => {

    const ret = (val) => val;

    const [ sendMail, setSendMail ] = useState(false);

    const [ clientMail, setClientMail ] = useState('');
    const [ message, setMessage ] = useState('');
    const handleSubmit = (e) => {
        (async function () {
            const { data, error } = await resend.emails.send({
              from: 'Acme <onboarding@resend.dev>',
              to: ['calebphone72@gmail.com'],
              subject: 'Contacto desde el portafolio',
              text: `${message}`,
            });
          
            if (error) {
              window.alert(error);
            }
          
            window.alert(data);
          });
      };

    return(
        <>
            <button className={styles.btn} onClick={() => setSendMail(true)}>
                <span className={styles.svgContainer}>
                    <svg viewBox={ret("0 0 500 512")} height={ret("2.5rem")} xmlns={ret("http://www.w3.org/2000/svg")}
                        className={styles.svgIcon} fill="white">
                            <path d={ret("M158 391v-142l-82-63V361q0 30 30 30")} fill={ret("#4285f4")}/>
                            <path d={ret("M 154 248l102 77l102-77v-98l-102 77l-102-77")} fill={ret("#ea4335")}/>
                            <path d={ret("M354 391v-142l82-63V361q0 30-30 30")} fill={ret("#34a853")}/>
                            <path d={ret("M76 188l82 63v-98l-30-23c-27-21-52 0-52 26")} fill={ret("#c5221f")}/>
                            <path d={ret("M436 188l-82 63v-98l30-23c27-21 52 0 52 26")} fill={ret("#fbbc04")}/>
                    </svg>
                </span>
                <span className={styles.bG}></span>
            </button>

            { sendMail && (
                <>
                    <div className={styles.formBackGround} onClick={() => setSendMail(false)}></div>

                    <form className={styles.formContainer} onSubmit={handleSubmit}>
                        <label htmlFor={ret("email-input")}>Email:</label>
                        <input type={ret("email")} id={ret("email")} value={clientMail} onChange={(e) => setClientMail(e.target.value)}/>

                        <label htmlFor={ret("message")}>Message:</label>
                        <textarea id={ret("message")} value={message} onChange={(e) => setMessage(e.target.value)}/>
                        <button type={ret("submit")} className={ret("btn")}>Send</button>
                    </form>
                </>
            )}
        </>
    )
}
export default MailBtn
/*
import React, { useState } from 'react';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the email and message to your server.
    console.log(`Email: ${email}, Message: ${message}`);
  };

  return (
    <form className="formBackGround" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit" className="btn">
        Send
      </button>
    </form>
  );
}

export default EmailForm;
*/