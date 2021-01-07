import firebase from "../../firebase"
import "../styles/tailwind.css"

function MyApp({ Component, pageProps }) {
  return <Component firebase={firebase} {...pageProps} />
}

export default MyApp
