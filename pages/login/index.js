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

import styles from "../../styles/modules/p-register.module.scss";
import Footer from "../../components/footer.js";
import {useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

const SignIn = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const {state, dispatch} = useContext(DataContext);
  const { email, password } = userData;
  const { auth } = state;

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  
  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault();

    //---- Loading-Screen appears----
    dispatch({ type: 'NOTIFY', payload: {loading: true} }) 

    const res = await postData("auth/login", userData);
    // --- Display error messagebox ----
    if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err} })
    // --- Success messageBox
    dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
    dispatch({ type: 'AUTH', payload: {
      token: res.access_token,
      user: res.user
    }})

    // Cookie settings
    Cookie.set('refreshtoken', res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7, // expires after one week
    });
    localStorage.setItem("firstLogin", true);
  };

  useEffect(() => {
    if(Object.keys(auth).length !== 0) router.push("/participator")
  }, [auth])

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


  return (
    <div id="wrapper-login">
      <div className="modal" ref={vantaRef}>
        <form className="content-box" onSubmit={handleSubmit}>
          <div className="container">
            <NavLogin />
            <div id="img"></div>
            <h1>Login</h1>
            <div className="text-div">
              <input
                type="email"
                id="uname"
                placeholder="Enter Email"
                value={email}
                onChange={handleChangeInput}
                name="email"
              />
              <span className="text-span"></span>
            </div>
            <div className="text-div">
              <input
                type="password"
                id="psw"
                placeholder="Enter Password"
                defaultValue={password}
                onChange={handleChangeInput}
                name="password"
              />
              <span className="text-span"></span>
            </div>
            <span className="psw" /*style="color:#ce8e35"*/>
              Forgot <Link href="#">password?</Link>
              <Link href="/login/distributor">Register</Link>
            </span>
            <span className="psw"></span>
            <div id="OtherLogins">
              <div>Google</div>
              <div>GitHub</div>
              <div>Sonstiges</div>
            </div>
            <button id="submit" type="submit">
              Login
            </button>

            <label id="remember1" for="remember">
              {" "}
              Remember me
              <input type="checkbox" id="remember" name="remember" />
            </label>
          </div>
          
        </form>
        
      </div>
      <div className="footer2">
    <Footer />
  </div>
    </div>
    
  );
};

export default SignIn;
