import {ProduitFerme} from "./ProduitFerme";

export class Poulet extends ProduitFerme{

    constructor(name: string) {
        super(name);
        this._name = name;
        this._energy = 80;
        this._energyMax = 80;
        this._energyUsed = 5;
        this._productionParTour = 3;

    }
}