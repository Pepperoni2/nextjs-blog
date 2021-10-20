import Head from 'next/head'
import Link from 'next/link'
import favicon from '../public/favicon.ico'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div id="wrapper">
      <Head>
        <title>Eventx</title>
        <link rel="icon" type="image/x-icon" href={favicon.src} />
      </Head>
      
        <nav id="nav">
          <div id="wrpnav">
            <div id="wrph1">

              <div id="wrplh">
                <div id="logo"></div>
                {!session && (
                  <>
                    <Link href="/pages/signin">EventX</Link>
                  </>
                )}
                {session && (
                  <>
                    <Link href="/pages/signin">EventX</Link>
                    <br/>Angemeldet als{session.user.email}
                  </>
                )}
              </div>
            </div>


            <div id="wrpbt">

              <div id="Popup">
                <div id="flexPop">

                  <button className="bt">Home</button>
                  <Link href="/">
                    <button className="bt" onClick="#">About</button>
                  </Link>

                  <Link href="/signin">
                    <button className="bt"><a>Login</a></button>
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </nav>

        <main id="main">
          <div id="mainbackgr"></div>
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
        <footer id="footer">
          <div id="wrpfooter">
            <div id="logo1" ></div>
            <li>
              Copyright 2021
            </li>

            <li>
              <Link href="#">
                <a>About</a>
              </Link>
            </li>
          </div>
        </footer>
      </div>
  );
}