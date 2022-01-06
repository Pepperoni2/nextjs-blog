import NavigationLeft from "../components/navigation-afterlogin";
import { useSession } from "next-auth/client";
import styles from "../styles/modules/afterloginpage.module.scss";

export default function Participator() {
  
  const [loading, session] = useSession()
  return (
    
    <div className={styles.wrapper}>
        <NavigationLeft />
      <div id="test"></div>
    </div>
  );
}
