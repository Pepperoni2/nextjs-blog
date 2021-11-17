import '../styles/styles.css'
import '../styles/navstyles.css'
import '../styles/footerstyles.css'
import '../styles/toast.css'
import { DataProvider } from '../store/GlobalState' 

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
        <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp