/* eslint-disable */

import React from "react";
import HOC from "./src/Enchant";
import Parent from "./src/Parent";

// class component global statement management
import { ClassInitGMS } from "./src/class-GMS";
import { state, stateInformation } from "./src/class-storage";


// dependencies
import { generateID } from "./src/id-generator";


export interface createSMSObject {
   addState: Function;
   setState: Function;
   Parent: any;
}

function connectGMS(manager: any, states: Object = {}) {
   
   function init() {
      if (states === {}) return;

      for (const [key, value] of Object.entries(states)) {
         if ((state as any)[key] !== undefined) {
            console.error("Key name is not empty, choose different name to the state");
            throw new Error("Naming Error: States that want to be the store must be uniquely named");
         };
         
         (state as any)[key] = value;
      }
   }
}

function createGMS() {
   function init() {}

   function reinitialize() {}

   return Object.create({
      init: init,
      reinitialize: reinitialize,
   });
}

function useGMS() {}

export { createGMS, useGMS };
