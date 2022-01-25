import Head from "next/head";
import favicon from "/public/favicon.ico";
function Header1(props) {
  return (
    <Head>
      <title>Eventx</title>
      <link rel="icon" type="image/x-icon" href={favicon.src} />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap" rel="preconnect"/>
    </Head>
  );
}

export default Header1;
