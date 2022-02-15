import Link from "next/dist/client/link";
import styles from "../styles/modules/logRegNav.module.scss";
function NavLogin(props) {
  return (
    <div className={styles.wrplhlogin}>
      <Link href="/">
        <a className={styles.a1}>
        <div className={styles.logologin}> </div>
        </a>
      </Link>

      <Link href="/">
        <a className={styles.link}>EventX <span className={styles.underline}></span></a>
      </Link>
    </div>
  );
}

export default NavLogin;

/* -------------- DELETED CODE ------------

              <Link href="/signin">
                <button className="bt">
                  <a>Login</a>
                </button>
              </Link> */
