import {ProduitFerme} from "./ProduitFerme";

export class Pommier extends ProduitFerme{

    constructor(name: string, energy: number, max: number, used: number, prod: number) {
        super(name, energy, max, used, prod);
        this._name = name;
        this._energy = 60;
        this._energyMax = 60;
        this._energyUsed = 6;
        this._productionParTour = 4;

    }
}