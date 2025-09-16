export class Humain {
    private _name: string | null = null;
    private _age: number | null = null;
    private _hobbies : Array<string> = [];

    constructor(name: string) {
        this._name = name;
    }

    get name() : string | null {
        return this._name;
    }
    set name(str:string){
        this._name = str;
    }
    get age(): number | null{
        return  this._age;
    }

    set age(nb: number){
        this._age = nb;
    }

    addHobby(hobbyStr: string): void {
        this._hobbies.push(hobbyStr);
    }
}
