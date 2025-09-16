import {Heros} from "./Heros";

export class Healer extends Heros {
    constructor(name: string) {
        super(name);
        this._pv = 150;
        this._pvMax = 150;
        this._strength = 5;
    }
    ditBonjour() {
        super.ditBonjour();
        console.log('je suis soigneur');
    }

    getDamageValue() {
        let nb = super.getDamageValue();
        return 35;
    }
}