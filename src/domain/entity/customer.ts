// Complexidade acidental. (Armazenamento e transporte de dados)
import AddressEntity from "./address";

export default class CustomerEntity {

    private _id: string;
    private _name: string;
    private _address!: AddressEntity;
    private _active: boolean = true;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    validate() {
        if (this._id.length === 0)
            throw new Error("ID is required");
        if (this._name.length === 0)
            throw new Error("Name is required");
    }

    changeName(name:string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if(this._address === undefined)
            throw new Error("Address is required to activate a customer");
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    isActive(): boolean {
        return this._active;
    }

    set Address(address: AddressEntity) {
        this._address = address;
    }

    get name(): string {
        return this._name;
    }

}