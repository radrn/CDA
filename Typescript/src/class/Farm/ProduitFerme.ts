export class ProduitFerme {
    protected _name: string;
    protected _energy: number;
    protected _energyMax: number;
    protected _energyUsed: number;
    protected _productionParTour: number;



    constructor(name: string, energy: number, max: number, used: number, prod: number) {
        this._name = name;
        this._energy = energy;
        this._energyMax = max;
        this._energyUsed = used;
        this._productionParTour = prod;
    }

    produire():number {
        if(this._energy > 0){
            this._energy = this._energyMax - this._energyUsed;
            console.log(this._name + ' produit ' + this._productionParTour + ' unités, il lui reste ' + this._energy + '/' + this._energy + ' energie');
        } else {
            console.log( this._name + ' doit se reposer');
        }
    }

    seReposer(): void {
        if (this._energy <= 0) {
            const repos:number = Math.floor(Math.random() * (this._energyMax - this._energyMax / 2 + 1)) + this._energyMax / 2;
            this._energy = repos;
            console.log(this._name + 'se repose et gagne : ' + this._energy);
        }
    }
}