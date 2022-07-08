import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import AOS from "aos";

function Document() {
   useEffect(() => {
      console.log("AOS Initialized!")
      AOS.init();
   }, []);

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