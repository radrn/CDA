import {ProduitFerme} from "./ProduitFerme";

export class Mouton extends ProduitFerme{

    constructor(name: string, energy: number, max: number, used: number, prod: number) {
        super(name, energy, max, used, prod);
        this._name = name;
        this._energy = 90;
        this._energyMax = 90;
        this._energyUsed = 8;
        this._productionParTour = 4;

    }
}
