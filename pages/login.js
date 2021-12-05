import Head from 'next/head'
import Link from 'next/link'
import NavLogin from '../components/navigation-login'
import Header1 from '/components/head'
import { postData } from '../util/fetchData'
import { useState, useContext } from 'react'
import valid from '../util/valid'
import { DataContext } from '../store/GlobalState'
import Cookie from 'js-cookie'

const Signin = () => {

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

  return(
    <div>
      <Head>
        <title>Sign in Page</title>
      </Head>

      <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          name="email" value={email} onChange={handleChangeInput}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
          name="password" value={password} onChange={handleChangeInput}/>
        </div>
        
        <button type="submit" className="btn btn-dark w-100">Login</button>

        <p className="my-2">
          You don't have an account? <Link href="/register"><a style={{color: 'crimson'}}>Register Now</a></Link>
        </p>
      </form>
    </div>
  )
}

export default Signin


// ----- Code ----
/* <div id="wrapper-login">
    
    <div className="modal">
      
      <form className="content-box" onSubmit={handleSubmit}>
        
          <div className="container">
          <NavLogin/>
          <div id="img">
          </div>
           <h1>Login</h1>
           <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name="email" value={email} onChange={handleChangeInput}/>
          </div>
            <div className="text-div">
              <input type="password" id="psw" placeholder="Enter Password" name="password" onChange={handleChangeInput} value={password}/>
              <span className="text-span"></span>
              </div>
            <span className="psw" >Forgot <Link href="#">password?</Link><Link href="register">Register</Link></span>
            <span className="psw"></span>
            <button id="submit" type="submit">Login</button>
      
           
            <label id="remember1" for="remember"> Remember me  <input type="checkbox" id="remember" name="remember" /></label>
            
      
          </div>
      </form>
      
    </div>
    </div> */

  
    