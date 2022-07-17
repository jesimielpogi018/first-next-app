/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from "next/types";
import Head from "next/head";
import React, {  } from "react";

// components
import Navigation from "@layouts/Navigation";

const Home: NextPage = () => {

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