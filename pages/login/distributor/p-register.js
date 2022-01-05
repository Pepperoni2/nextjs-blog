import Head from "next/head";
import Link from "next/link";
import valid from "../../../util/valid";
import styles from "../../../styles/modules/p-register.module.scss";
import Footer from "../../../components/footer.js";
import { useState, useContext } from "react";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../util/fetchData";

import { useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
//import NavLogin from '../../../components/header-login'
//import Header1 from '/components/head'

const RegisterP = () => {
  // Functions for Registration DO NOT TOUCH
  // ----------------------------------------------------
  const initialState = { name: "", email: "", password: "", cf_password: "" };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const {state, dispatch} = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } }); //console.log(errMsg)

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/register", userData);

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { success: res.err } });

    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
  };
  // --------------------------------------------

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xe97231,
          midtoneColor: 0xe8dbc9,
          lowlightColor: 0x292627,
          baseColor: 0x9b8175,
          speed: 2,
          zoom: 2.0,
        })
      );
    }
    async () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  return (
    <div className={styles.wrapperregister} ref={vantaRef}>
      <Head>
        <title>Register Page</title>
      </Head>
      <div className={styles.header}>
        <Link href="/">
          <div className={styles.logo}></div>
        </Link>

        <Link href="/">
          <a>EventX</a>
        </Link>
      </div>
      <form className={styles.register} onSubmit={handleSubmit}>
        <div className={styles.formgroup}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className={styles.formcontrol}
            id="name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
          <span className={styles.textspan}></span>
        </div>

        <div className={styles.formgroup}>
          <label className={styles.label} htmlFor="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            className={styles.formcontrol}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <span className={styles.textspan}></span>
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>

        <div className={styles.formgroup}>
          <label className={styles.label} htmlFor="exampleInputPassword1">
            Password
          </label>
          <input
            type="password"
            className={styles.formcontrol}
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
          <span className={styles.textspan}></span>
        </div>

        <div className={styles.formgroup}>
          <label className={styles.label} htmlFor="exampleInputPassword2">
            Confirm Password
          </label>
          <input
            type="password"
            className={styles.formcontrol}
            id="exampleInputPassword2"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
          <span className={styles.textspan}></span>
        </div>

        <button type="submit" className={styles.submit}>
          Register
        </button>

        <p className={styles.line}>
          Already have an account?{" "}
          <Link href="/login">
            <a style={{ color: "crimson" }}>Login Now</a>
          </Link>
        </p>
      </form>
      <div className={styles.footer1}>
        <Footer />
      </div>
    </div>
  );
};
export default RegisterP;
