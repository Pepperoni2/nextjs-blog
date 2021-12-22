import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import NavLogin from '../../components/header-login'
import Header1 from '../../components/head'
import { postData } from '../../util/fetchData'
import { useState, useContext } from 'react'
import valid from '../../util/valid'
import { DataContext } from '../../store/GlobalState'
import Cookie from 'js-cookie'


const SignIn = () => {

  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const {email, password} = userData

 

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(userData)

    const res = await postData('auth/login', userData)
    console.log(res)

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7      // expires after one week
    })
    localStorage.setItem('firstLogin', true)
    
  }

  return (

    <div id="wrapper-login">
      <div className="modal">

        <form className="content-box" onSubmit={handleSubmit}>

          <div className="container">
            <NavLogin />
            <div id="img">
            </div>
            <h1>Login</h1>
            <div className="text-div">
              <input type="email" id="uname" placeholder="Enter Email" defaultValue={email} onChange={handleChangeInput} name="email"/>
              <span className="text-span"></span>
            </div>
            <div className="text-div">
              <input type="password" id="psw" placeholder="Enter Password" defaultValue={password} onChange={handleChangeInput} name="password" />
              
            </div>
            <span className="psw" /*style="color:#ce8e35"*/ >Forgot <Link href="#">password?</Link><Link href="/login/distributor">Register</Link></span>
            <span className="psw"></span>
            <button id="submit" type="submit">Login</button>


            <label id="remember1" for="remember"> Remember me<input type="checkbox" id="remember" name="remember" /></label>


          </div>
        </form>

      </div>
    </div>
  )
}

export default SignIn