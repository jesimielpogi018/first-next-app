import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import AOS from "aos";

function Document() {
   useEffect(() => {
      console.log("AOS Initialized!");
      AOS.init();
   }, []);

   return (
      <Html lang="en">
         <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Create Next App 1st project" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin="true"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Charis+SIL:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap"
               rel="stylesheet"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}

export default Document;
