import Link from "next/dist/client/link";
import { signIn, signOut, useSession } from "next-auth/client";

function Nav(props) {
  /*
  const mq = typeof window.matchMedia("(max-width: 690px)");

  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      document.getElementById("nav").style.height = "15vh";
      document.getElementById("nav").style.backgroundColor =
        "rgba(47,47,47, 0.5)";
    } else {
      document.getElementById("nav").style.height = "20vh";
      document.getElementById("nav").style.backgroundColor =
        "rgba(47,47,47, 1)";
    }

    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      document.getElementById("wrapper").style.backgroundColor =
        "rgba(47,47,47, 0.5)";
    }
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      document.getElementById("wrppic").style.backgroundColor =
        "rgba(233, 114, 49, 1)";
    } else {
      document.getElementById("wrppic").style.backgroundColor =
        "rgba(47,47,47, 0.5)";
    }
  }
  function scrollWin() {
    window.scrollBy(0, 300);
  }
  */
  const [session, loading] = useSession();
  return (
    <nav id="nav">
      <div id="wrpnav">
        <div id="wrph1">
          <div id="wrplh">
            <Link href="/">
              <div id="logo"></div>
            </Link>

            <Link href="/">
              <a>EventX</a>
            </Link>
          </div>
        </div>

        <div id="wrpbt">
          <div id="Popup">
            <div id="flexPop">
              <Link href="/">
                <button className="bt">
                  <a>Home</a>
                </button>
              </Link>
              <Link href="/">
                <button className="bt">
                  <a>About</a>
                </button>
              </Link>
              <Link href="/login">
                <button className="bt">
                  <a>Login</a>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </nav>


  );
}

export default Nav;

/* -------------- DELETED CODE ------------

              <Link href="/signin">
                <button className="bt">
                  <a>Login</a>
                </button>
              </Link> */
