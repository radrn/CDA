import {ProduitFerme} from "./ProduitFerme";

export class Mouton extends ProduitFerme{

    constructor(name: string) {
        super(name);
        this._name = name;
        this._energy = 90;
        this._energyMax = 90;
        this._energyUsed = 8;
        this._productionParTour = 4;

    }
}
