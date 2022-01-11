// ----------- Styling ----------------
import "../styles/styles.css";
import "../styles/navstyles.css";
/* import 'bootstrap/dist/css/bootstrap.css'  */
import "../styles/stylelogin.css";
import "../styles/distributor.css";
//-------------------------------------
//---- Backend & Animation imports-----
import { DataProvider } from "../store/GlobalState";
import Layout from "../components/ToastLayout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useRouter } from "next/router";
//-------------------------------------

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => {setLoading(false)};

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <DataProvider>
      <Loading loading={loading} />
      <Layout />
      <div id="portal"></div>
      <Component {...pageProps} />
    </DataProvider>
  );
}
