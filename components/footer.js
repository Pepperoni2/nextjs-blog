import Link from "next/dist/client/link";
import styles from "../styles/modules/footerstyles.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrpfooter}>
        <Link href="/">
          <a className={styles.atag}>
            <div className={styles.logo1}></div>
          </a>
        </Link>

        <li>© Copyright 2022</li>

        <li>
        <Link href="">
            <a className={styles.about}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/impressum">
            <a className={styles.impress}>Impressum</a>
          </Link>
        </li>
      </div>
    </footer>
  );
}
export default Footer;
