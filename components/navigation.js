import Link from "next/dist/client/link";
import { signIn, signOut, useSession } from "next-auth/client";

import { useEffect, useState } from "react";

function Nav(props) {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [height, setHeight] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

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
                  style={{
                    background: `rgb(229, 112, 49, ${backgroundTransparacy})`,
                  }}
                >
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
