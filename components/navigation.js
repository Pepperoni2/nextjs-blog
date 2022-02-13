import Link from "next/dist/client/link";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../store/GlobalState";
import { motion } from "framer-motion";
import Burger from "./burgermenu";
import burgerstyles from "../styles/modules/burger.module.scss";
function Nav(props) {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [height, setHeight] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  const { state } = useContext(DataContext);
  const { auth } = state;

  const nixRouter = () => {
    return (
      <>
        <div></div>
      </>
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);

    return () => window.removeEventListener("scroll", handleScrollY);
  });

  const handleScrollY = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 200;
    // console.log(clientWindowHeight);
    if (backgroundTransparacyVar < 1) {
      let heightVar = 200 - backgroundTransparacyVar * 35;
      let boxShadowVar = backgroundTransparacyVar * 1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setHeight(heightVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  const [stateApp, setStateApp] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleState = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
    if (window.innerWidth > 750) setClicked(false);
  };

  useEffect(() => {
    const burger = document.querySelector(".wrpbt-div");
    const navLinks = document.querySelectorAll("#flexPop button");
    const Lines = document.querySelector(".backg");
    const body = document.querySelector("body");
    const nav = document.querySelector("#nav");
    navLinks.forEach((links, index) => {
      if (links.style.animation) {
        links.style.animation = "";
      } else {
        links.style.animation = `navLinksFade 0.5s ease-in-out forwards ${
          (index + 0.7) / 7
        }s`;
      }
    });
    window.addEventListener("resize", function Abc() {
      if (window.innerWidth > 750) {
        setClicked(false);
        console.log(this.window, innerWidth);
        burger.classList.remove("wrpbt-active");
        burger.classList.remove("wrpbt-close");
        this.removeEventListener("resize", Abc);
      } else {
      }
    });

    console.log(clicked);
    if (clicked) {
      navLinks.forEach((links, index) => {});
      burger.classList.add("wrpbt-active");
      Lines.classList.add("rotate");
      burger.classList.remove("wrpbt-close");
      console.log(Lines);
      body.style.overflow = "hidden";
      nav.style.background="black";
    } else {
      burger.classList.remove("wrpbt-active");
      burger.classList.add("wrpbt-close");
      Lines.classList.remove("rotate");
      body.style.overflow = "visible";
      nav.style.background="transparent";
      navLinks.forEach((links, index) => {
        if (links.style.animation) {
          links.style.animation = "";
        }
      });
    }
  }, [clicked]);

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

        <motion.div
          className="wrpbt-div"
          // style={{stateHere<690 ? opac}
        >
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

              {Object.keys(auth).length === 0 ? (
                <Link href="/login">
                  <button className="bt">
                    <a>Login</a>
                  </button>
                </Link>
              ) : auth.user.role === "participator" ? (
                <Link href="/participator">
                  <button className="bt">
                    <a>Home</a>
                  </button>
                </Link>
              ) : auth.user.role === "organizer" ? (
                <Link href="/organizer">
                  <button className="bt">
                    <a>Home</a>
                  </button>
                </Link>
              ) : (
                nixRouter()
              )}
            </div>
          </div>
        </motion.div>

        <div
          className={burgerstyles.wrapperburger}
          //  onClick={()=>setClicked(false)}
        >
          <div className={burgerstyles.flex}>
            <div className="backg" onClick={toggleState}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
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
