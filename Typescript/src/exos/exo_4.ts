export function longestWord(sentence:string):string{
   const strSplit:Array<string> =  sentence.split(' ');
   let longest:string = "";

   for (let i:number=0; i<strSplit.length; i++){
        if (strSplit[i].length > longest.length){
            longest = strSplit[i];
        }
   }
   return longest;
}