import NavigationLeft from "../components/navigation-afterlogin";
import { useSession } from "next-auth/client";

export default function Participator() {
  
  const [loading, session] = useSession()
  return (
    
    <div id="wrapper">
        <NavigationLeft />
      <div id="test"></div>
    </div>
  );
}
