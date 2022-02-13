import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
//Front-end has added this:
//import ReactPlayer from 'react-player'
import Nav from "/components/navigation";
import Footer from "/components/footer";
import Header1 from "/components/head";
/* import { Player } from "video-react"; */
import video from "/Vids/Concert_1630.mp4";
/* import { FixedSizeList as List } from "react-window"; */
import Header from "/components/head";
import ScrollToTop from "../components/scrollTop";
import styles from "../styles/modules/styles.module.scss";
//import {window} from 'window'
import axios from "axios";

export default function Home() {
  /* const [jokeState, setJokeState] = useState({
    joke: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const mamares = await axios.get("https://yomomma-api.herokuapp.com/jokes");
    // console.log(mamares);
    setJokeState({
      ...jokeState,
      // joke: joke,
    });
  }; */
  return (
    <div id="wrapper">
      <Header1 />

      <Nav />

      <main id="main">
        <div id="mainbackgr"></div>
        <video autoPlay muted loop src={video} />

        <div id="p-div">
          <p className="p1">
            Vielseitige <i>Eventplannung!</i>
          </p>
          <Link href="#">
            <button id="btMehr">Mehr erfahren</button>
          </Link>
        </div>
      </main>

      <div id="wrppic">
        <div id="pic1">
          <p className="SchB">
            <i>Sicherheit!</i>
          </p>
        </div>
        <div id="pic2">
          <p className="SchB">
            <i>Ereignisse entdecken!</i>
          </p>
        </div>
        <div id="pic3">
          <p className="SchB">
            <i>Erleben Sie Spaß!</i>
          </p>
        </div>
      </div>
      <ScrollToTop></ScrollToTop>
      {/* <div className={styles.parallax}>
        <div className={styles.more}>
          <h1>Yo Mama Joke</h1>
          <p></p>
        </div>
      </div> */}
      <div id="footer1">
        <Footer />
      </div>
    </div>
  );
}
