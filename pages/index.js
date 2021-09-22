import Link from 'next/link'
import Head from 'next/head'

export default function Home(){
  return(
<>
<Head> 
  <title>Eventx</title>
  <link rel="icon" href=
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
</>
    )
}
            
