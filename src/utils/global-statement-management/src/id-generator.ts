/* eslint-disable curly */

function randomize(format: string) {
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

   return format;
}

export function generateID(format: string = "") {
   if (format === "") {
      return randomize("xxx-xxx-xxx");
   }

   if (/[A-WYZ][a-wyz]\d/.test(format)) {
      console.error("Read at https://random.com on how to specify format in createGMS");
      return;
   }

   return randomize(format);
}