export function reverseArray(array:Array<number>):Array<number>{

    let newArray:Array<number> = [];
    for(let i:number= array.length  -1; i>=0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}