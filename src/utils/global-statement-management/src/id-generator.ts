/* eslint-disable curly */

// this object stores the generated ID so it can avoid duplication of
// ID references to the manager.
const generatedID = { };

function randomize(format: string): string {
   const beforeFormat = format;
   
   const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
   const alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W" ,"Y","Z"];
   const alphabetLower = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "y", "z"];

   const holder = [num, alphabetUpper, alphabetLower];

   let pattern = /x/;
   
   while (pattern.test(format)) {
      let randomHolder = holder[Math.floor(Math.random() * 3)];
      let randomChar = randomHolder[Math.floor(Math.random() * 3)];

      format.replace(/x/gi, randomChar);
   }
   // check if the generated iD is already in used.
   if ((generatedID as any)[format] !== undefined) return randomize(beforeFormat);

   (generatedID as any)[format] = true;
   return format;
}

export function generateID(format: string = ""): string {
   if (format === "") {
      return randomize("xxx-xxx-xxx");
   }

   if (/[A-WYZ][a-wyz]\d/.test(format)) {
      console.error("Read at https://random.com on how to specify format in createGMS");
      throw new Error("Read at https://random.com on how to specify format in createGMS");
   }

   return randomize(format);
}