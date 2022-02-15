import Head from "next/head";
import React from "react";
import Link from "next/link";
import NavLogin from "../../components/header-login";
import Header1 from "../../components/head";
import { postData } from "../../util/fetchData";
import { useState, useContext, useEffect } from "react";
import valid from "../../util/valid";
import { DataContext } from "../../store/GlobalState";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import styles from "../../styles/modules/login.module.scss";
import Footer from "../../components/footer.js";
import { useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { motion } from "framer-motion";

const SignIn = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { state, dispatch } = useContext(DataContext);
  const { email, password } = userData;
  const { auth } = state;
  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //---- Loading-Screen appears----
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/login", userData);
    // --- Display error messagebox ----
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    // --- Success messageBox
    dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    // Cookie settings
    Cookie.set("refreshtoken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7, // expires after one week
    });
    localStorage.setItem("firstLogin", true);
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) {
      if (auth.user.role === "participator" || auth.user.role === "admin")
        router.push("/participator");
      else {
        router.push("/organizer");
      }
    }
  }, [auth]);

  //------------------------------

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x292627,
          midtoneColor: 0xe8dbc9,
          lowlightColor: 0xe8dbc9,
          baseColor: 0xe97231,
          blurFactor: 0.6,
          speed: 0.7,
          zoom: 2,
        })
      );
    }
    async () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  useEffect(() => {
    const inputEmail = document.getElementById("uname");
    const inputPassw = document.getElementById("psw");
    inputEmail.addEventListener("change", () => {
      const span1 = document.getElementById("span1");
      
      // const span2 = document.getElementsById("span2");
      if (inputEmail && inputEmail.value) {
        span1.style.width = "100%";
      } else {
        span1.style.width = null;
      }

    });
    inputPassw.addEventListener("change", () => {
      const span2 = document.getElementById("span2");
      
      // const span2 = document.getElementsById("span2");
      if (inputEmail && inputEmail.value) {
        span2.style.width = "100%";
      } else {
        span2.style.width = null;
      }

    });
  });
  return (
    <motion.div
      className={styles.wrapperlogin}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        height: {
          duration: 0.2,
        },
        opacity: {
          duration: 0.4,
        },
      }}
    >
      <div className={styles.modal} ref={vantaRef}>
        <form className={styles.contentbox} onSubmit={handleSubmit}>
          <div className={styles.container}>
            <NavLogin />

            <div className={styles.img}></div>
            <motion.h1 className={styles.title}>Login</motion.h1>
            <div className={styles.textdiv}>
              <input
                className={styles.input}
                type="email"
                id="uname"
                placeholder="Enter Email"
                value={email}
                onChange={handleChangeInput}
                name="email"
              />
              <span className={styles.textspan} id="span1"></span>
            </div>
            <div className={styles.textdiv}>
              <input
                type="password"
                id="psw"
                placeholder="Enter Password"
                defaultValue={password}
                onChange={handleChangeInput}
                name="password"
                className={styles.input}
              />
              <span className={styles.textspan} id="span2"></span>
            </div>
            <span className={styles.divpswAreg} /*style="color:#ce8e35"*/>
              <li>
                Forgot
                <Link href="/about">
                  <a className={styles.psw}>password?</a>
                </Link>
              </li>
              <li>
                <Link href="/login/distributor">
                  <a className={styles.register}>Register</a>
                </Link>
              </li>
            </span>
            {/* <span className={styles.textspan}></span> */}
            {/* <div id="OtherLogins">
              <div>Google</div>
              <div>GitHub</div>
              <div>Sonstiges</div>
            </div> */}
            <button className={styles.submit} type="submit">
              Login
            </button>
            {/* <div >
            <label className={styles.remember1} for="remember">
              
              Remember me
              <input
                className={styles.checkbox}
                type="checkbox"
                id="remember"
                name="remember"
              />
            </label>
            </div> */}
          </div>
        </form>
      </div>
      <div className={styles.footer1}>
        <Footer />
      </div>
    </motion.div>
  );
};

export default SignIn;
