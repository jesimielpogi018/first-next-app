import { Html, Head, Main, NextScript } from "next/document";
import { useRef } from "react";

function Document() {
   const HTML = useRef();

   return (
      <Html lang="en">
         <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Create Next App 1st project" />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}

export default Document;