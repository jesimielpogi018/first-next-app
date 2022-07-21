import React, { Component } from "react";

// management's owner
import { manager } from "@url/index";

class TestClass extends Component<any, any> {

   state = { 
      firstName: "Jesimiel",
      lastName: "Almedejar",
      fullName: "Jesimiel Almedejar"
   }

   private worker;

   constructor(props: any) {
      super(props);

      this.worker = manager.init(this, this.state);
   }

   render() {
      return (
         <>
            <h1>From Class</h1>
         </>
      );
   }
}

export default TestClass;