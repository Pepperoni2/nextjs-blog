
import React from 'react'
import Link from 'next/link'

import { signIn, signOut, useSession } from 'next-auth/client'
import { connectToDatabase } from '../util/mongodb'
//Front-end has added this:
//import ReactPlayer from 'react-player'
import Nav from '/components/navigation'
import Footer from '/components/footer'
import Header1 from '/components/head'
import { useState }from "react"
import { Player } from 'video-react'
import video from '/Vids/Concert_1630.mp4'
import { FixedSizeList as List } from 'react-window'
import Header from '/components/head'
//import {window} from 'window'



export default function Home({properties}) {
  const [session, loading] = useSession()
  console.log(properties);
/*
   
*/
  return (
    <div id="wrapper">
     <Header1/>
      
        <Nav/>

        <main id="main">
          <div id="mainbackgr"></div>
          <video autoPlay muted loop src={video}/>
        {!session && (
          <div id="p-div">

            <p className="p1">

            Vielseitige <i>Eventplannung!</i>

            </p>
            <Link href="#">
            <button id="btMehr">Mehr erfahren</button>
            </Link>
          </div>
        )}

        {session &&(
          <div id="p-div">

            <p className="p1">

            Signed in as <i></i>

            </p>
            
          </div>
        )}
          

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

export async function getServerSideProps(context){
  const { db } = await connectToDatabase()

  const data = await db.collection('users').find({}).limit(20).toArray();

  const properties = JSON.parse(JSON.stringify(data));

  const filtered = properties.map(property => {
    return{
      _id: property._id,
      name: property.name,
      email: property.email
    }
  })

  return{
    props: {properties: filtered},
  }

}