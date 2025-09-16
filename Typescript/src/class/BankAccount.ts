export class BankAccount{
    private _balance: number = 0;
    private _name: string;
    private _active: boolean = true;

    constructor(name: string) {
        this._name = name;
    }
    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        this._balance = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }

    deposit(amount: number){
        if(this._active){
            this._balance += amount
            console.log("Nouveau solde est de : " + this._balance);
        }

    }

    withdraw(amount: number){
        if(this._active && this._balance >= amount){
            this._balance -= amount
            console.log("Nouveau solde est de : " + this._balance);
        } else {
            console.log("Solde insuffisant !")
        }
    }

    displayBalance(){
    console.log("Le compte de " + this._name + " à actuellement " + this._balance + " euros");
    }
}