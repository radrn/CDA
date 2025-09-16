import {ProduitFerme} from "./ProduitFerme";

export class Poulet extends ProduitFerme{

    constructor(name: string, energy: number, max: number, used: number, prod: number) {
        super(name, energy, max, used, prod);
        this._name = name;
        this._energy = 80;
        this._energyMax = 80;
        this._energyUsed = 5;
        this._productionParTour = 3;

    }
}