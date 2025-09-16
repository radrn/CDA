import {ProduitFerme} from "./ProduitFerme";

export class Ble extends ProduitFerme{

    constructor(name: string, energy: number, max: number, used: number, prod: number) {
        super(name, energy, max, used, prod);
        this._name = name;
        this._energy = 70;
        this._energyMax = 70;
        this._energyUsed = 7;
        this._productionParTour = 6;

    }
}