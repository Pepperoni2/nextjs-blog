import Head from "next/head";
import Link from "next/link";
import valid from "../../../util/valid";
import styles from "../../../styles/modules/o-register.module.scss";
import Footer from "../../../components/footer.js";
import { useState, useContext, useEffect, useRef } from "react";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../util/fetchData";
import { useRouter } from "next/router";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
//import NavLogin from '../../../components/header-login'
//import Header1 from '/components/head'

const RegisterO = () => {
  // Functions for Registration DO NOT TOUCH
  // ----------------------------------------------------
  const initialState = { name: "", email: "", password: "", cf_password: "", location: "", phone: "", address: "" };
  const [orgData, setOrgData] = useState(initialState);
  const { name, email, password, cf_password, location, phone, address} = orgData;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter()

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setOrgData({ ...orgData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } }); //console.log(errMsg)

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/register_org", orgData);

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { success: res.err } });
    
    return dispatch({ type: "NOTIFY", payload: { success: res.msg } }); 

  };
  // --------------------------------------------
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if(Object.keys(auth).length !== 0) router.push("/participator")
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight:50.0,
          minWidth:50.0,
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
  }, [vantaEffect], [auth]);

  return (
    <div className={styles.wrapperregister} >
      <div className={styles.wallpaper} ref={vantaRef}></div>
      <Head>
        <title>Register Page</title>
      </Head>
     
      <form className={styles.register} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <Link href="/">
          <div className={styles.logo}></div>
        </Link>
        <div className={styles.a1}>
            <a href="/login/distributor/o-register">EventX</a>
          
            <a href="/login/distributor/o-register">Register Organizer</a>
         
        </div>
      </div>
        <div className={styles.mainform}>
          
          <div className={styles.formgroup} >
            <label className={styles.label} htmlFor="name">
              Organizer/Organization Name*
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
            <label className={styles.label} htmlFor="tel_num">
              Phonenumber
            </label>
            <input
              type="tel"
              className={styles.formcontrol}
              id="tel_num"
              aria-describedby="telHelp"
              name="phone"
              value={phone}
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
            value={address}
            onChange={handleChangeInput}
          />
          <span className={styles.textspan}></span>
        </div>
        <div className={styles.space} ></div>
        <div className={styles.formgroup} >
          <label className={styles.label} htmlFor="location">
            District/Region
          </label>
          <input
            type="text"
            className={styles.formcontrol}
            id="location"
            name="location"
            value={location}
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
        <div className={styles.btdiv}>
        <button type="submit" className={styles.submit}>
          Register
        </button>
        </div>
        <p className={styles.line}>
          Already have an account?
          <Link href="/login">
            <a style={{ color: "0xe8dbc9" }}>Login Now</a>
          </Link>
        </p>
        <div className={styles.footer1}>
        <Footer />
      </div>
      </form>
     
      
    </div>
  );
};
export default RegisterO;
