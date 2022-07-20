/* eslint-disable */

import React from "react";
import HOC from "./src/Enchant";
import Parent from "./src/Parent";

export interface createSMSObject {
   addState: Function,
   setState: Function,
   Parent: any
}

const stateInformation: Object = {

};

const state: Object = {

};

function createGMS<T extends React.Component>(owner: T, states: Object = {}) {

   function init() {
      if (states === {}) return;
      for (const [key, value] of Object.entries(states)) {
         (state as any)[key] = value;
      }
   }

   function addState<T>(key: string, value: T) {
      if ((state as any)[key] !== undefined) return;



   }

   function setState<T>(key: string, value: T) {
      if ((state as any)[key] === undefined) return;



   }

   const obj = Object.create({
      addState: addState,
      setState: setState
   });

   init();
   return obj;
}

function useGMS<T>() {

}

export { createGMS, useGMS };