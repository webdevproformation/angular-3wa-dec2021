export {}

class Product {
    private _name: string; // _ => convention de nommage 
    private _ref : string;

    constructor(name: string , ref : string) {
        this.name = name; // setter assigne une valeur à l'attribut _name
        this.ref = ref; // setter assigne une valeur à l'attribut _name
    }

    // setter
    set ref(ref: string) {
        this._ref = ref;
    }

    // getter
    get ref(): string {
        return this._ref;
    }

    // setter
    set name(name: string) {
        this._name = name + " utilisation du setter name ";
    }

    // getter
    get name(): string {
        return this._name + " utilisation du getter name";
    }
}

const produit1 = new Product("Btwin"  , "Decathlon")

console.log(produit1.name);
// tsc 10-exo.ts --removeComments --target es5 && node 10-exo.js