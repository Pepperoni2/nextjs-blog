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
export default function Distributor(params) {
  const style = { color: "white", fontSize: "1.5em" };

  React.useEffect(() => {
    const drop = document.getElementsByClassName("dropdown-content");
  });
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
              <span className={styles.chbt}>
                <h3>Organizer</h3>
                <GiAries className={styles.icons} />
                <div className={styles.backg}></div>
              </span>

              <span className={styles.chbt}>
                <h3>Participator</h3>
                <GiAzulFlake className={styles.icons} />
                <div className={styles.backg}></div>
              </span>
            </div>
            <p className={styles.inptext}>ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
          </div>
        </div>

        <div className={styles.footer}>
          <Footer></Footer>
        </div>
      </div>
    </motion.div>
  );
}
