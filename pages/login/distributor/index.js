import Head from "next/head";
import styles from "../../../styles/modules/distributor.module.scss";
import Link from "next/link";
import NavLogin from "../../../components/header-login";
import Header1 from "/components/head";
import { GiAries } from "@react-icons/all-files/gi/GiAries";
import { GiAzulFlake } from "@react-icons/all-files/gi/GiAzulFlake";
import { motion } from "framer-motion";
import { get } from "jquery";
import React, { useState, useEffect } from "react";
import Loading from "../../../components/Loading";
import Footer from "../../../components/footer";
import { id } from "date-fns/locale";

export default function Distributor(params) {
  const style = { color: "white", fontSize: "1.5em" };

  const [stateText, setText] = useState();

  const changeText = (vari) => {
    text.insertBefore.innerHTML = setText(vari);
  };

  const showButton1 = () => {
    const bt1 = document.getElementById("0");
    console.log(bt1);
    bt1.innerHTML = (
      <Link href="/">
        <a className={styles.confirm}>Confirm</a>
      </Link>
    );
  };

  useEffect(() => {
    const text = document.getElementById("text");
    var found;
    console.log(text);
    if (text.innerText == "") {
      text.style.scale = "0";
    } else {
      text.style.scale = "1";
      text.style.opacity = "1";
      // text.innerHTML = stateText;
      for (var i = 0; i < text.length; i++) {
        if (text[i].textContent == "Organizer") {
          console.log("lol");
          break;
        }
      }
    }
  }, [stateText]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.9,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          <div className={styles.bwrap}>
            <h1>Choose</h1>
            <div className={styles.flexbwrap}>
              <span
                className={styles.chbt}
                id="0"
                onClick={
                  (() =>
                    changeText(
                      "Organizers have the ability to create and to organize your own events or parties"
                    ),
                  showButton1)
                }
              >
                <h3>Organizer</h3>
                <GiAries className={styles.icons} />
                <div className={styles.backg}></div>
              </span>

              <span
                className={styles.chbt}
                id="1"
                onClick={() =>
                  changeText(
                    "Participators have the ability to create and to organize your own events or parties"
                  )
                }
              >
                <h3>Participator</h3>
                <GiAzulFlake className={styles.icons} />
                <div className={styles.backg}></div>
              </span>
            </div>
            <p className={styles.inptext} id="text">
              {stateText}

              {/* <Link href="/">
                <a className={styles.confirm}>Confirm</a>
              </Link> */}
            </p>
          </div>
        </div>

        <div className={styles.footer}>
          <Footer></Footer>
        </div>
      </div>
    </motion.div>
  );
}
