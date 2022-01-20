import { Link } from "react-router-dom";
import Footer from "../components/footer";
import styles from "../styles/modules/impressum.module.scss";

export default function Impressum() {
  return (
    <div className={styles.wrapper}>
     
      <div className={styles.wrap}>
        <div className={styles.bwrap}>
        <h1>Information</h1>
        <p>
          This is a thesis project, please do not pursue any legal action.{" "}
          <br></br>The website is non-commercial and for educational purposes
          only.
        </p>
        </div>
        <a href="/" className={styles.back}>
          Go back
        </a>
      </div>
      
      <div className={styles.footer}>
   
        <Footer></Footer>
      </div>
      
    </div>
  );
}
