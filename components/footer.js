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

        <li>Copyright 2021</li>

        <li>
          {/* <Link href="#">About</Link> */}
          About
        </li>
        <li>
        <Link href="/impressum">
          <a className={styles.atag}>
            Impressum
          </a>
        </Link>
        </li>
      </div>
    </footer>
  );
}
export default Footer;
