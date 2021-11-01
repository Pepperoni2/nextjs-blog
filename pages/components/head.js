import Head from 'next/head'
import favicon from '/public/favicon.ico'
function Header1(props) {
    return(<Head>
        <title>Eventx</title>
        <link rel="icon" type="image/x-icon" href={favicon.src} />
       </Head>
       
       );
}

export default Header1;