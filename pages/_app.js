<<<<<<< HEAD
import '../styles/styles.css'
import '../styles/navstyles.css'
import '../styles/footerstyles.css'
import '../styles/stylelogin.css'
import "../styles/distributor.css"
import { DataProvider } from '../store/GlobalState'
import Layout from '../components/ToastLayout'



export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  )
}
=======
import "../styles/styles.css";
import "../styles/navstyles.css";
import "../styles/footerstyles.css";
import "../styles/stylelogin.css";
import "../styles/distributor.css";
import { motion } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return <Component {...pageProps} />;
}
>>>>>>> fb55ad7387d452946d98f0b7d139b4559c1f2358
