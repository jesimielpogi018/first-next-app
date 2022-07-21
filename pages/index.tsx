import React, { Component } from "react";
import Head from "next/head";

// under testing custom global state management
import { createManagement } from "@utilities/global-statement-management/index";

// components

// state manager
const manager = createManagement();

class Home extends Component<any, any> {

   state = { count: 0 };

   constructor(props: any) {
      super(props);

      this.handleLog = this.handleLog.bind(this);
   }

   handleLog() {
      console.log(this.state.count);
      console.log(manager);
   }

   render() {
      return (
         <>
            <Head>
               <title>Home</title>
            </Head>

            <button onClick={this.handleLog}>Log</button>
         </>
      );
   }
}

export default Home;
