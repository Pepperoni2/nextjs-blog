// ----------- Styling ----------------
import "../styles/styles.css";
import "../styles/navstyles.css";
/* import 'bootstrap/dist/css/bootstrap.css'  */
import "../styles/stylelogin.css";

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
//-------------------------------------
//---- Backend & Animation imports-----
import { DataProvider } from "../store/GlobalState";
import Layout from "../components/ToastLayout";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useRouter } from "next/router";
//-------------------------------------

// ----- Performance report & metrics ---------
/* export function reportWebVitals(metric) {
  if(metric.label === 'web-vital'){
    console.log(metric)
  }
} */
//

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    const handleStart = (url) => {
      body.style.overflow = "hidden";

      url !== router.pathname ? setLoading(true)
       : setLoading(false);
    };
    const handleComplete = (url) => {setLoading(false)
      body.style.overflow = "visible";
     
    
    };

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
