import Head from "next/head";
import React from "react";
import Link from "next/link";
import NavLogin from '../../../components/header-login'
import Header1 from "/components/head";
import { GiAries } from "@react-icons/all-files/gi/GiAries";
import { GiAzulFlake } from "@react-icons/all-files/gi/GiAzulFlake";

export default function Distributor(params) {
  const style = { color: "white", fontSize: "1.5em" };

  return (
    <div id="wrapperdistributer">
      <Header1 />
      <div id="box"></div>
      <Link href="/login/distributor/o-register">
        <button className="boxes0">
          <a>
            <GiAries id="icon0" />
            <h1>Organizer</h1>
          </a>
        </button>
      </Link>
      <Link
        href="/login/distributor/p-register"
      >
        <button className="boxes1">
          <a>
            <GiAzulFlake id="icon1" />
            <h1>Participator</h1>
          </a>
        </button>
      </Link>
    </div>
  );
}
