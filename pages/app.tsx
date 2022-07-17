import React, { Component } from "react";
import Head from "next/head";

import { createCookie } from "../src/hooks/useCookie";

class AppPage extends Component<any, any> {
   private Cookies;
   constructor(props: any) {
      super(props);
      this.Cookies = createCookie();
   }

   render(): React.ReactNode {
      return (
         <>
            <Head>
               <title>App</title>
            </Head>
            <h1>App Page</h1>
         </>
      );
   }
}

export default AppPage;
