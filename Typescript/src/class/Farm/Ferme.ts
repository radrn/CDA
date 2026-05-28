import {ProduitFerme} from "./ProduitFerme";
import {Vache} from "./Vache";
import {Mouton} from "./Mouton";
import {Poulet} from "./Poulet";
import {Ble} from "./Ble";
import {Pommier} from "./Pommier";

export class Ferme{
    private _objects:Array<ProduitFerme> = [];

    generateOject(){
        for (let i:number = 0; i <= 10 ; i++){
            let random = Math.floor(Math.random() * (5-1) + 1);
            if (random === 1){
                let vache: Vache = new Vache(0);
                this._objects.push(vache);
            } else if (random === 2){
                let poulet: Poulet = new Poulet();
                this._objects.push(poulet);
            } else if (random === 3){
                let mouton: Mouton = new Mouton();
                this._objects.push(mouton);
            } else if (random === 4){
                let ble: Ble = new Ble();
                this._objects.push(ble);
            }else if (random === 5){
                let pommier: Pommier = new Pommier();
                this._objects.push(pommier);
            }
        }

    }

    startProduction(){


    }
}