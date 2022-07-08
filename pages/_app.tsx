import type { AppProps } from "next/app";

// importing global css styles
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />
}

export default MyApp;