/* eslint-disable no-unused-vars */

const previousState = {

};

function random(): string {
   let str = "";

   const array = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "y",
      "z",
   ];

   for (let i = 0; i < 5; i++) {
      let randomChar = array[Math.floor(Math.random() * array.length - 2)];

      str += randomChar;
   }

   return str;
}

export default function withEffect(callback: Function, array: Array<any> | null = null) {
   if (array === null) {
      callback();
      return;
   }

   if (array.length === 0) {
      callback();

      let generatedID = random();

      (previousState as any)[generatedID] = {
         func: callback,
         runOnce: true
      };

      return;
   }

   for (let i = 0; i < array.length; i++) {
      // re-creating useEffect

      
   }
}