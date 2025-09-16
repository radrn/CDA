export function randomNumbers(arrayNb:number, max:number): Array<number>{
    let numbers:Array<number> = [];

    for(let i:number = 0; i< arrayNb; i++){
    let nb:number = getRandomInt(0, (max+1));
      numbers.push(nb)
    }
    return numbers;
}
function getRandomInt(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}