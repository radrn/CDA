import {ProduitFerme} from "./ProduitFerme";

export class Vache extends ProduitFerme {

    constructor(name: string) {
        super(name);
        this._name = name;
        this._energy = 100;
        this._energyMax = 100;
        this._energyUsed = 10;
        this._productionParTour = 5;

    }
}