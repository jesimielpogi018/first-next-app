export interface ManagerInformationType {
   owner: string,
   type: "class" | "function",
   initialState: Object,
   state: Object
}

interface StateInformationType {
   data: Array<ManagerInformationType>
}

interface StateType {}

export const stateInformation: StateInformationType = {
   data: [],
};

export const state: StateType = {};

// state information object structure.
// const data = {
//    owner: "managerID | generatedID",
//    initialState: {
//       "components owner": {
//          data: {
//             /* initial state */
//          },
//       },
//       "components owners": {
//          data: {
//             /* initial state */
//          },
//       },
//    },
//    state: {
//       "components owner": {
//          data: {
//             /* initial state */
//          },
//       },
//       "components owners": {
//          data: {
//             /* initial state */
//          },
//       },
//    },
// };
