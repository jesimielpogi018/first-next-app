/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from "next/types";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useCookie } from "../src/hooks/useCookie";

// components
import Navigation from "../src/pages/home/Home-Navigation";

const Home: NextPage = () => {
   const name = useRef<HTMLInputElement>(null);
   const value = useRef<HTMLInputElement>(null);
   const Cookies = useCookie();

   useEffect(() => {
      
   }, []);

   function showCookies() {
      console.log(document.cookie);
      console.log(Cookies?.all());
   }

   function addCookie() {
      const nameString = name.current?.value as string;
      const valueString = value.current?.value as string;

      Cookies?.set(nameString, valueString);
   }

   function deleteCookie() {
      const nameString = name.current?.value as string;

      Cookies?.remove(nameString);
   }

   function getCookie() {
      const nameString = name.current?.value as string;
      const value = Cookies?.get(nameString);
      alert(value);
   }

   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <Navigation />
         <p>Name</p>
         <input type="text" ref={name} />
         <p>Value</p>
         <input type="text" ref={value} />
         <br />
         <button onClick={showCookies}>Show Cookies</button>
         <br />
         <button onClick={addCookie}>Add Cookie</button>
         <br />
         <button onClick={deleteCookie}>Delete Cookie</button>
         <br />
         <button onClick={getCookie}>Get Cookie</button>
      </>
   );
}

export default Home;