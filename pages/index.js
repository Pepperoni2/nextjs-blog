import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import favicon from '../public/favicon.ico'
import { signIn, signOut, useSession } from 'next-auth/client'
//Front-end has added this:
//import ReactPlayer from 'react-player'
import Nav from './components/navigation'
import Footer from './components/footer'
import { useState }from "react"
import { Player } from 'video-react'
import video from '/nextjs-blog/Vids/Concert_1630.mp4'
import { FixedSizeList as List } from 'react-window';
//import {window} from 'window'



export default function Home() {
  const [session, loading] = useSession();
/*
  
*/
  return (
    <div id="wrapper">
      <Head>
        <title>Eventx</title>
        <link rel="icon" type="image/x-icon" href={favicon.src} />
      </Head>
      
        <Nav/>
        

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
        <Footer/>
        
      </div>
  );
}