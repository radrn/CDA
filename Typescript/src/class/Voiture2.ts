export class Voiture2{
    private _type: string;
    private _modele: string;
    private _marque: string;
    private _mileage: number;
    private _passengers : Array<string> = [];

    constructor(type: string, modele: string, marque: string, km: number, passagers: Array<string>) {
        this._type = type;
        this._modele = modele;
        this._marque = marque;
        this._mileage = km;
       this._passengers = passagers
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get modele(): string {
        return this._modele;
    }

    set modele(value: string) {
        this._modele = value;
    }

    get marque(): string {
        return this._marque;
    }

    set marque(value: string) {
        this._marque = value;
    }

    get mileage(): number {
        return this._mileage;
    }

    set mileage(value: number) {
        this._mileage = value;
    }

    get passengers(): Array<string> {
        return this._passengers;
    }

    set passengers(value: Array<string>) {
        this._passengers = value;
    }

    getGlobalStatus(){
        console.log("La voiture " + this._type + ", " + this._marque + " " + this._modele + " de " + this._mileage + " km a comme passagers : " + this._passengers);
    }
}