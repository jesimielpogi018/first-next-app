import React, { Component } from "react";
import Head from "next/head";

// under testing custom global state management
import { createGMS } from "@utilities/global-statement-management/index";

// components
import Test from "@pages/home/Test";

const Manager = React.createContext(null);

class Home extends Component<any, any> {
   private management;
   
   constructor(props: any) {
      super(props);
      this.management = createGMS(this);

      this.state = {
         count: 0,
      };
      this.handleBind();
   }

   handleBind() {
      this.handleIncrement = this.handleIncrement.bind(this);
      this.handleDecrement = this.handleDecrement.bind(this);
   }

   handleIncrement() {
      this.setState({
         count: this.state.count + 1,
      });
   }

   handleDecrement() {
      this.setState({
         count: this.state.count - 1,
      });
   }

   render() {
      const { management } = this;

      return (
         <>
            <Head>
               <title>Home</title>
            </Head>

            <Manager.Provider value={management}>
               <Test />
               <h1>{this.state.count}</h1>
               <button onClick={this.handleIncrement}>Increment</button>
               <button onClick={this.handleDecrement}>Decrement</button>
            </Manager.Provider>
         </>
      );
   }
}

export default Home;
