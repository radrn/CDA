export class Personnage {
    private _name: string;
    private _pvs: number = 200;

    constructor(name: string) {
        this._name = name;
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get pvs(): number {
        return this._pvs;
    }

    set pvs(value: number) {
        this._pvs = value;
    }

    attack(perso: Personnage){
        if(perso.pvs > 0){
            perso.pvs -= 20;
            console.log(this._name + " a attaqué " + perso.name + ", il reste " + perso.pvs + " pvs à " + perso.name);
        } else {
            console.log("Impossible d'attaquer");
        }

    }
}
