/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from "next/types";
import Head from "next/head";
import React, { useEffect } from "react";

import { getSum } from "../app";

// components
import Navigation from "@pages/home/Home-Navigation";

const Home: NextPage = () => {

   useEffect(() => {
      console.log(getSum(10, 20));
   }, []);
   
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <Navigation />
      </>
   );
}

export default Home;