import Head from "next/head";
import React from "react";
import Link from "next/link";
import favicon from "D:/nextjs-blog/public/favicon.ico";
import NavLogin from "D:/nextjs-blog/components/header-login.js";
import Header1 from "/components/head";
import { GiAries } from "@react-icons/all-files/gi/GiAries";
import { GiAzulFlake } from "@react-icons/all-files/gi/GiAzulFlake";

export default function Distributor(params) {
  const style = { color: "white", fontSize: "1.5em" };

  return (
    <div id="wrapperdistributer">
      <Header1 />
      <h1 id="titledistributor">Choose</h1>
      <div id="box">
     
      <Link href="/login/distributor/o-register">
        <button className="boxes0">
          <a className="link0">
            <GiAries id="icon0" />
            <h1>Organizer</h1>
          </a>
        </button>
      </Link>
      <Link
        href="/login/distributor/p-register"
      >
        <button className="boxes1">
          <a className="link1">
            <GiAzulFlake id="icon1" />
            <h1>Participator</h1>
          </a>
        </button>
      </Link>
      </div>
    </div>
  );
}
