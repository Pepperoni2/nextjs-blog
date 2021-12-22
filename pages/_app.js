
import '../styles/styles.css'
import '../styles/navstyles.css'
import '../styles/footerstyles.css'
import '../styles/stylelogin.css'
import "../styles/distributor.css"
import { DataProvider } from '../store/GlobalState'
import Layout from '../components/ToastLayout'
import { motion } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  )
}

