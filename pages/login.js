import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import favicon from '../public/favicon.ico'

export default function Login(params) {
    return (

<div id="wrapper">
  

  
  
  <nav class="nav">
    <div id="wrpnav">
        <div id="wrph1">
            
            <div id="wrplh">
                <div id="logo" onclick="location.href='/Main/index.html';" style="cursor:pointer;"></div>
                <a href="/Main/index.html">Event<b style="font-size: smaller;">X</b></a>
            </div>
 
            
        </div>
        
        <div id="wrpbt">
            
          <div id="Popup">
           <div id="flexPop">
             
           <button class="bt" onclick="location.href='/Main/index.html';" >Home</button>
           <button class="bt" >About</button>
              
            </div>
          </div>  
          
  
       </div>
       
        
    </div>
   
    
    </nav>
    

  
<div class="modal">
  
  <form class="content-box">
    <div id="img">
    </div>
      <div class="container">
      
       <h1>Login</h1>
        <div class="text-div">
        <input type="text" id="uname" placeholder="Enter Username" name="uname" required>
        <span class="text-span"></span>
        </div>
        <div class="text-div">
          <input type="password" id="psw" placeholder="Enter Password" name="psw" required>
          <span class="text-span"></span>
          </div>
        <span class="psw" style="color:#ce8e35">Forgot <a href="#">password?</a><a href="/Main/LoginRegister/verteil.html">Register</a></span>
        <span class="psw"></span>
        <button id="submit" type="submit">Login</button>
  
       
        <label id="remember1" for="remember"> Remember me  <input type="checkbox" id="remember" checked="checked" name="remember" ></label>
        
  
      </div>
  </form>
  
  </form>
</div>
);
}