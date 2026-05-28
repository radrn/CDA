import {ProduitFerme} from "./ProduitFerme";

export class Pommier extends ProduitFerme{

    constructor(name: string) {
        super(name);
        this._name = name;
        this._energy = 60;
        this._energyMax = 60;
        this._energyUsed = 6;
        this._productionParTour = 4;

    }
}