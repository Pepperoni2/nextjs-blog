import Link from "next/dist/client/link";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../store/GlobalState";

function Nav(props) {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [height, setHeight] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  const { state } = useContext(DataContext)
  const { auth } = state

  const nixRouter = () => {
    return(
      <>
      <div></div>
      </>
    )
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 200;

    if (backgroundTransparacyVar < 1) {
      let heightVar = 200 - backgroundTransparacyVar * 30;
      let boxShadowVar = backgroundTransparacyVar * 0.4;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setHeight(heightVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <nav
      id="nav"
      style={{
        background: `rgba(37, 30, 33, ${backgroundTransparacy})`,
        height: `${height}px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
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
                <button
                  className="bt"
                // TODO lol
                //style={{
                //   background: `rgb(229, 112, 49, ${backgroundTransparacy})`,
                // }}
                >
                  <a>About</a>
                </button>
              </Link>
              <Link href="/login/distributor">
                <button className="bt">
                  <a>Register</a>
                </button>
              </Link>


              {
                Object.keys(auth).length === 0 ?
                <Link href="/login">
                  <button className="bt">
                    <a>Login</a>
                  </button>
                </Link>
                : auth.user.role === "participator" ?
                <Link href="/participator">
                  <button className="bt">
                    <a>Home</a>
                  </button>
                </Link>
                : auth.user.role === "organizer" ?
                
                <Link href="/organizer">
                  <button className="bt">
                    <a>Home</a>
                  </button>
                </Link>
                : nixRouter()
                
              }


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
