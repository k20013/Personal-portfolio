import styles from './mail-btn.module.css';

const MailBtn = () => {

  const ret = (val) => val;

  return (
    <>
      <button className={styles.btn} onClick={() => setSendMail(true)}>
        <span className={styles.svgContainer}>
          <svg viewBox={ret("0 0 500 512")} height={ret("2.5rem")} xmlns={ret("http://www.w3.org/2000/svg")}
            className={styles.svgIcon} fill="white">
            <path d={ret("M158 391v-142l-82-63V361q0 30 30 30")} fill={ret("#4285f4")} />
            <path d={ret("M 154 248l102 77l102-77v-98l-102 77l-102-77")} fill={ret("#ea4335")} />
            <path d={ret("M354 391v-142l82-63V361q0 30-30 30")} fill={ret("#34a853")} />
            <path d={ret("M76 188l82 63v-98l-30-23c-27-21-52 0-52 26")} fill={ret("#c5221f")} />
            <path d={ret("M436 188l-82 63v-98l30-23c27-21 52 0 52 26")} fill={ret("#fbbc04")} />
          </svg>
        </span>
        <span className={styles.bG}></span>
      </button>
    </>
  )
}
export default MailBtn