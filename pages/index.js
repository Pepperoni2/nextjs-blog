import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home(){
  
<!DOCTYPE html>
<html lang="en">
<Head> 
  <title>Eventx</title>
</Head>

<body>
    <div id="wrapper">

        <nav id="nav">
        <div id="wrpnav">
            <div id="wrph1">
                <div id="wrplh">
                    <div id="logo"></div>
                    <h1><a href="#">Event-Manager</a></h1>
                </div>
                
                <span class="h1aspan"></span>
            </div>
        
            <div id="wrpbt">
                
               <div id="Popup">
                <div id="flexPop">
                <button class="bt" >Home</button>
                <button class="bt" >Impressum</button>
                <button class="bt" >Login</button>
                 </div>
               </div>  
               
 
            </div>
            
        </div>
       
        
        </nav>
        
        <main id="main">
            <div id="mainbackgr"></div>
            <div id="p-div">
                
                <p id="p1">

                Vielseitige <i>Eventplannung!</i>
                
                </p>
               
                <button onclick="">Mehr erfahren</button>
            </div>
           
        </main>
        <p id="p2">
            Einfach und sicher Veranstaltungen plannen und teilen!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quis facere error unde, ipsa totam omnis, corrupti a tenetur aspernatur natus delectus, rem voluptatum odit? Aspernatur dignissimos facere ut voluptates.               
        </p>
        <footer id="footer">
        <div id="wrpfooter">
            <div id="logo1"></div>
                <li>
                    Copyright 2021
                </li>
                
                <li>
                    <a href="#">Impressum</a>
                </li>
                
                    
                
            
            
        </div>
        </footer>
    </div>
</body>
}
            
