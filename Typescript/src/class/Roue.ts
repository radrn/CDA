export class Roue{
    private _type: string;
    private _isNew: boolean = true;

    constructor(type:string) {
        this._type = type;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get isNe(): boolean {
        return this._isNew;
    }

    set isNe(value: boolean) {
        this._isNew = value;
    }
}