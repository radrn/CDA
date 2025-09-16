export class Library {
    private _Games: Array<string> = [];

    get Games(): Array<string> {
        return this._Games;
    }

    set Games(value: Array<string>) {
        this._Games = value;
    }

    addGame(name: string){
        this._Games.push(name);
    }

    removeGame(name: string){
        const index: number = this._Games.indexOf(name);
        this._Games.splice(index, 1);
    }

    giveGame(name: string, destination: Library){
        this.removeGame(name);
        destination.addGame(name);
    }
}