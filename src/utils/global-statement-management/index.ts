/* eslint-disable */

import React from "react";
import HOC from "./src/Enchant";
import Parent from "./src/Parent";

// class component global statement management
import GMSWorker, { GMSManager } from "./src/class-GMS";
import { state, stateInformation } from "./src/class-storage";

// dependencies
import { generateID } from "./src/id-generator";

interface CreateManagementType {
   ID: string;
   addStore: Function;
}

function createManagement(name: string = ""): CreateManagementType {
   let managerID: string = name;

   if (managerID === "") {
      managerID = generateID();
   }

   const manager = new GMSManager(managerID);

   function addStorage(workerName: string = "", states: Object = {}) {


      function init() {
         if (states === {}) return;
         
         for (const [key, value] of Object.entries(states)) {

         }
      }

      function addState() {}

      function setState() {}

      function all() {}

      function initial() {}

      function remove() {}

      return Object.create({});
   }

   return Object.create({
      ID: managerID,
      addStore: addStorage,
   });
}

function connectManagement(bossID: string, states: Object = {}) {}

export { createManagement };
