export function countVowels(sentence:string):number{
    let count:number = 0;
    let vowels:Array<string> = ["a", "e", "i", "o", "u","y"];

    for (const letter of sentence){
        if (vowels.includes(letter)){
        count++ }
    }
    return count
    }
