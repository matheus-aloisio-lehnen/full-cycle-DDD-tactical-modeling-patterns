export default class Product {

    private _id: string;
    private _name: string;
    private _price: number;

    constructor(id: string, name: string, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }

    validate(): boolean {
        if (this._id.length === 0)
            throw new Error("ID is required");
        if (this._name.length === 0)
            throw new Error("Name is required");
        if (this._price < 0)
            throw new Error("Price must be greater than zero");
        return true;
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    changePrice(price: number) {
        this._price = price;
        this.validate();
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

}