import Link from "next/dist/client/link";

function NavLogin(props) {
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

/* -------------- DELETED CODE ------------

              <Link href="/signin">
                <button className="bt">
                  <a>Login</a>
                </button>
              </Link> */
