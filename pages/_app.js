import '../styles/styles.css'
import '../styles/navstyles.css'
import '../styles/footerstyles.css'
import { DataProvider } from '../store/GlobalState' 

export default function App({ Component, pageProps }) {
    return (
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    )
  }