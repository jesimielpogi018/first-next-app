/* eslint-disable */

import React from "react";
import HOC from "./src/Enchant";
import Parent from "./src/Parent";

// class component global statement management
import { state, stateInformation, ManagerInformationType } from "./src/class-storage";

// dependencies
import { generateID } from "./src/id-generator";

interface CreateManagementType {
   ID: string;
   addStore: Function;
}

interface AddStorageReturnType {
   add: Function,
   set: Function,
   all: Function,
   initial: Function,
   remove: Function,
   revert: Function
}

function createManagement(name: string = ""): CreateManagementType {
   let managerID: string = name;

   if (managerID === "") {
      managerID = generateID();
   }

   function addStorage(workerName: string = "", type: "class" | "function", initialState: Object = {}) {

      if (workerName === "") workerName = generateID();

      let data: ManagerInformationType = {
         owner: managerID,
         type: type,
         initialState: {  },
         state: {  }
      };

      function init() {
         if (initialState === {}) return;
         
         for (const [key, value] of Object.entries(initialState)) {
            if ((data.initialState as any)[key] !== undefined) return;
            (data.initialState as any)[key] = value;
            (data.state as any)[key] = value;
         }
      }

      function addState(key: string | Function, value: string) {
         if (key instanceof Function) {

         } else {

         }
      }

      function setState() {}

      function all() {}

      function initial() {}

      function remove() {}

      function revert() {}

      init();

      stateInformation.data.push(data);

      return Object.create({
         add: addState,
         set: setState,
         all: all,
         initial: initial,
         remove: remove,
         revert: revert
      });
   }

   const obj = {
      ID: managerID,
      addStore: addStorage,
   };

   return obj;
}

function connectManagement(parent: string, child: string) {

}

export { createManagement };
