export default class OrderItem {

    private _id: string;
    private _name: string;
    private _price: number;
    private _quantity: number;
    private _productId: string;

    constructor(id: string, name: string, price: number, quantity: number, productId: string) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._productId = productId;
        this.validate();
    }

    validate(): boolean {
        if(this._id.length === 0)
            throw new Error("ID is required");
        if(this._name.length === 0)
            throw new Error("Name is required");
        if(this._price <= 0)
            throw new Error("Price must be greater than zero");
        if(this._quantity <= 0)
            throw new Error("Quantity must be greater than 0");
        if(this._productId.length === 0)
            throw new Error("ProductID is required");
        return true;
    }

    get price(): number {
        return this._price;
    }

    get quantity(): number {
        return this._quantity;
    }

    orderItemTotal(): number {
        return this._price * this._quantity;
    }

}


// Aggregates:
// - Customer => AddressEntity
// - Order => OrderItem
// - Product =>