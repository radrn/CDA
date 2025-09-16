import {Heros} from "./Heros";

export class Guerrier  extends Heros {

    constructor(name:string) {
        super(name);
        this._pvMax = 400;
        this._pv = 400;
        this._strength = 35;
    }

    ditBonjour() {
        super.ditBonjour();
        console.log('je suis guerrier');
    }
}