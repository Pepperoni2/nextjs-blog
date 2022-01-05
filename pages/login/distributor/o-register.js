import Head from "next/head";
import Link from "next/link";
import valid from "../../../util/valid";
import styles from "../../../styles/modules/o-register.module.scss";
import Footer from "../../../components/footer.js";
import { useState, useContext } from "react";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../util/fetchData";

import { useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
//import NavLogin from '../../../components/header-login'
//import Header1 from '/components/head'

const RegisterO = () => {
  // Functions for Registration DO NOT TOUCH
  // ----------------------------------------------------
  const initialState = { name: "", email: "", password: "", cf_password: "" };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const { state, dispatch } = useContext(DataContext);

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
    <div className={styles.wrapperregister} ref={vantaRef}>
      <Head>
        <title>Register Page</title>
      </Head>
      <div className={styles.header}>
        <Link href="/">
          <div className={styles.logo}></div>
        </Link>
        <div className={styles.a1}>
          <Link href="/login/distributor/o-register">
            <a>EventX</a>
          </Link>
          <Link href="/login/distributor/o-register">
            <a>Register Organizer</a>
          </Link>
        </div>
      </div>
      <form className={styles.register} onSubmit={handleSubmit}>
        <div className={styles.mainform}>
          <div className={styles.formgroup} style={{width: "175px"} }>
            <label className={styles.label} htmlFor="name">
              First name*
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
          <div className={styles.space}></div>
          {/* Nachnahme ändern */}
          <div className={styles.formgroup} style={{width: "175px"} }>
            <label className={styles.label} htmlFor="nachname">
              Last name*
            </label>
            <input
              type="text"
              className={styles.formcontrol}
              id="nachname"
              name="nachname"
            //   value={"nachname"}
              onChange={handleChangeInput}
            />
            <span className={styles.textspan}></span>
          </div>
        </div>
        <div className={styles.mainform}>
          <div className={styles.formgroup}>
            <label className={styles.label} htmlFor="exampleInputEmail1">
              Email*
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
          </div>

          <div className={styles.space}></div>

          <div className={styles.formgroup}>
            <label className={styles.label} htmlFor="phonenumber">
              Phone number
            </label>
            <input
              type="phonenumber"
              className={styles.formcontrol}
              id="exampleInputEmail1"
              aria-describedby="phonenumber"
              name="phonenumber"
            //   value={phonenumber}
              onChange={handleChangeInput}
            />
            <span className={styles.textspan}></span>
          </div>
        </div>
        <div className={styles.mainform}>
        <div className={styles.formgroup}>
          <label className={styles.label} htmlFor="address">
            Address
          </label>
          <input
            type="text"
            className={styles.formcontrol}
            id="address"
            name="address"
            // value={address}
            onChange={handleChangeInput}
          />
          <span className={styles.textspan}></span>
        </div>
        <div className={styles.space} ></div>
        <div className={styles.formgroup} >
          <label className={styles.label} htmlFor="disreg">
            District/Region
          </label>
          <input
            type="text"
            className={styles.formcontrol}
            id="disreg"
            name="disreg"
            // value={disreg}
            onChange={handleChangeInput}
          />
          <span className={styles.textspan}></span>
        </div>
        
        </div>
        <div className={styles.mainform}>
          <div className={styles.formgroup}>
            <label className={styles.label} htmlFor="exampleInputPassword1">
              Password*
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
          <div className={styles.space}></div>
          <div className={styles.formgroup}>
            <label className={styles.label} htmlFor="exampleInputPassword2">
              Confirm Password*
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
        </div>
        <button type="submit" className={styles.submit}>
          Register
        </button>

        <p className={styles.line}>
          Already have an account?
          <Link href="/login">
            <a style={{ color: "0xe8dbc9" }}>Login Now</a>
          </Link>
        </p>
      </form>

      <div className={styles.footer1}>
        <Footer />
      </div>
    </div>
  );
};
export default RegisterO;
