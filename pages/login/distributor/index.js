import Head from "next/head";

import Link from "next/link";
import NavLogin from "../../../components/header-login";
import Header1 from "/components/head";
import { GiAries } from "@react-icons/all-files/gi/GiAries";
import { GiAzulFlake } from "@react-icons/all-files/gi/GiAzulFlake";
import { motion } from "framer-motion"
import { get } from "jquery";
import React, { useState, useEffect } from 'react';


export default function Distributor(params) {
  const style = { color: "white", fontSize: "1.5em" };
  
  
  
  React.useEffect(() => {
    const drop = document.getElementsByClassName("dropdown-content");
  });
  return (
    <motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        scale:.8,
        opacity:0
      },
      visible: {
        scale:1,
        opacity:1,
        transition: {
          delay:.2
        },
      }

    }}>
    <div id="wrapperdistributer">
      <Header1 />
      <h1 id="titledistributor">Choose</h1>
      <div id="box">
        <Link href="/login/distributor/o-register">
          <motion.button className="boxes0"  >
            <a className="link0">
              <GiAries id="icon0" />
              <h1 id="togh1">
                Organizer
              </h1>
              
             
             
            </a>
            <div className="dropdown-content" id="Drop">
                <p>
                  As an <i>Organizer</i> you have the ability to create and to
                  organize your own events or parties.
                </p>
              </div>
          </motion.button>
          
       </Link>
        <Link href="/login/distributor/p-register">
          <button className="boxes1">
            <a className="link1">
              <GiAzulFlake id="icon1" />
              <h1>Participator</h1>
            </a>
          </button>
        </Link>
      </div>
    </div>
    </motion.div>
  );
}
