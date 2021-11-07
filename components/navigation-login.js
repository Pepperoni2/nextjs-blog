import Link from "next/dist/client/link";
import { signIn, signOut, useSession } from "next-auth/client";

function NavLogin(props) {
  const [session, loading] = useSession();
  return (
    <div id="wrplh-login">
      <Link href="/">
        <div id="logo-login"></div>
      </Link>

      <Link href="/">
        <a>EventX</a>
      </Link>
    </div>
  );
}

export default NavLogin;