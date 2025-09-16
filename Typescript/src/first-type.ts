//string :
let paragraphe: string = "Allo !";

//nombre:
let nombre: number = 5;

//boolean:

let bool: boolean = true;

//des fois null ?
let nullVar : null = null;

//plusieurs typages sur une même variable:

let test: null | string = null;

//si bloqué uniquement:
let typeGeneric: any = 'something';

//typer les tableaux:
let arrayString:Array<string> = ["chat","oiseau","..."]

let arrayStringNB: Array<string|number> = ['chat', 7]

let testArray: Array<Array<string|number|boolean>> = [
    ['jules', 35, true],
    ['lucie', 24, true],
]

let miniExo: Array<string|number|Array<Array<number|boolean>>> = [
    "Bonjour !", 52, [
        [
            true
        ],
        [
            658
        ]
    ]
]

// les fonctions:
function sayHello(){
    console.log('Bonjour !');
}
sayHello();

function returnString(): string{
    return 'bonjour';
}
returnString();

function addition(nb1: number, nb2: number): number{
    return nb1 + nb2;
}
//console.log(addition(10,15));