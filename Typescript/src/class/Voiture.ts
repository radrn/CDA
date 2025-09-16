import {Roue} from "./Roue";

export class Voiture {
    private _name: string;
    private _km: number = 0;
    private _roues: Array<Roue>  =  [];

    constructor(name:string, array:Array<Roue>) {
     this._name = name;
     this.roues = array;
    }

    get km(): number {
        return this._km;
    }

    set km(value: number) {
        this._km = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get roues(): Array<Roue> {
        return this._roues;
    }

    set roues(value: Array<Roue>) {
        this._roues = value;
    }
}

