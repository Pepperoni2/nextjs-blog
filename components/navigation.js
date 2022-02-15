import Link from "next/dist/client/link";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../store/GlobalState";
import { motion } from "framer-motion";
import Burger from "./burgermenu";
import burgerstyles from "../styles/modules/burger.module.scss";
import { el } from "date-fns/locale";
function Nav(props) {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [height, setHeight] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  const { state } = useContext(DataContext);
  const { auth } = state;
  const [clicked, setClick] = useState(false);
  const nixRouter = () => {
    return (
      <>
        <div></div>
      </>
    );
  };
  const [stateNav, setStateNav] = useState(false);
  const handleScrollY1 = () => {
    if (window.pageYOffset > 20) {
      setStateNav(true);
    } 
    if (window.pageYOffset < 20) {
      setStateNav(false);
    } 
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY1);
    const nav = document.getElementById("nav");
    console.log(stateNav);
    console.log(clicked)
    if (stateNav) {
      setTimeout(Color, 50);

    } else {
      if(!clicked){
        setTimeout(NoColor, 220);


      }
    }
  });

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 200;

    const nav = document.getElementById("nav");
    // console.log(clientWindowHeight);
    if (clicked) {
      nav.style.background = "#251e21";
    } else if (backgroundTransparacyVar < 1) {
      let heightVar = 200 - backgroundTransparacyVar * 35;
      let boxShadowVar = backgroundTransparacyVar * 1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setHeight(heightVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  const [stateApp, setStateApp] = useState(false);

  const toggleState = () => {
    if (clicked) {
      setClick(false);
    } else {
      setClick(true);
    }
    if (window.innerWidth > 750) setClick(false);
  };
  function Color() {
    const nav = document.getElementById("nav");

    nav.style.background = "#251e21";
    console.log("lol");
  }
  function NoColor() {
    const nav = document.getElementById("nav");

    nav.style.background = "transparent";
    console.log("lol");
  }
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
        setClick(false);
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
      // body.style.overflow = "hidden";
      setTimeout(Color, 50);
    } else {
      burger.classList.remove("wrpbt-active");
      burger.classList.add("wrpbt-close");
      Lines.classList.remove("rotate");
      // body.style.overflow = "visible";
      navLinks.forEach((links, index) => {
        if (links.style.animation) {
          links.style.animation = "";
        }
      });
      setTimeout(NoColor, 220);
    }
  }, [clicked]);

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
              ) : auth.user.role === "participator" ||
                auth.user.role === "admin" ? (
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
              <span className="line1" style={{ height: "2px" }}></span>
              <span className="line2" style={{ height: "2px" }}></span>
              <span className="line3" style={{ height: "2px" }}></span>
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
