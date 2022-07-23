import React, { Component } from "react";
import Head from "next/head";

// state manager
//export const management = createManagement("Index");

class Home extends Component<any, any> {
   state = { count: 0 };

   constructor(props: any) {
      super(props);

      this.handleLog = this.handleLog.bind(this);
   }

   handleLog() {
      console.log(this.state.count);
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
