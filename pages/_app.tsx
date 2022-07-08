import type { AppProps } from "next/app";

// bootstrap's package
import "bootstrap/dist/css/bootstrap.css";

// importing global css styles
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />
}

export default MyApp;