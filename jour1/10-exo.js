"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = (function () {
    function Product(name, ref) {
        this.name = name;
        this.ref = ref;
    }
    Object.defineProperty(Product.prototype, "ref", {
        get: function () {
            return this._ref;
        },
        set: function (ref) {
            this._ref = ref;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name + " utilisation du getter name";
        },
        set: function (name) {
            this._name = name + " utilisation du setter name ";
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var produit1 = new Product("Btwin", "Decathlon");
console.log(produit1.name);
