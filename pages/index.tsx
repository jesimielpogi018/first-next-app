import React, { Component } from "react";
import Head from "next/head";

// under testing custom global state management
import { createManagement } from "@utilities/global-statement-management/index";

// components
import TestClass from "@components/TestClass";
import TestFunction from "@components/TestFunction";

// state manager
export const manager = createManagement("Index");

class Home extends Component<any, any> {

   state = { count: 0 };

   constructor(props: any) {
      super(props);

      manager.add(this, this.state);

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

            <TestClass />
            <TestFunction />

            <button onClick={this.handleLog}>Log</button>
         </>
      );
   }
}

export default Home;
