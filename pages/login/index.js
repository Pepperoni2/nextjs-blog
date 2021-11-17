import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import favicon from 'D:/nextjs-blog/public/favicon.ico'
import NavLogin from 'D:/nextjs-blog/components/header-login.js'
import Header1 from '/components/head'


export default function Login(params) {

  
    return (

<div id="wrapper-login">
  


    


<div className="modal">
  
  <form className="content-box">
    
      <div className="container">
      <NavLogin/>
      <div id="img">
    </div>
       <h1>Login</h1>
        <div className="text-div">
        <input type="text" id="uname" placeholder="Enter Username" name="uname" required/>
        <span className="text-span"></span>
        </div>
        <div className="text-div">
          <input type="password" id="psw" placeholder="Enter Password" name="psw" required/>
          <span className="text-span"></span>
          </div>
        <span className="psw" /*style="color:#ce8e35"*/ >Forgot <Link href="#">password?</Link><Link href="/login/distributor">Register</Link></span>
        <span className="psw"></span>
        <button id="submit" type="submit">Login</button>
  
       
        <label id="remember1" for="remember"> Remember me<input type="checkbox" id="remember" name="remember" /></label>
        
  
      </div>
  </form>
  
</div>
</div>
);
}