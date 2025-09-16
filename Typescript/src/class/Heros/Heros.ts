export class Heros {
    protected _name : string = "Heros";
    protected _pvMax: number = 200;
    protected _pv: number = 200;
    protected _strength: number = 10;

    constructor(name: string) {
        this._name = name;
    }

    ditBonjour():void {
        console.log('Hello !')
    }

    attack(): void {
        console.log("J'attaque de " + this._strength);
    }

    getDamageValue():void{
        this._strength =  this._strength * 0.5;
    }
}