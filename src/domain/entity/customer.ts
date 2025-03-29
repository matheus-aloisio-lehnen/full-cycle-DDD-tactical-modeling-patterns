// Complexidade acidental. (Armazenamento e transporte de dados)
import Address from "./address";

class CustomerEntity {

    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = true;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    changeName(name:string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if(this._address !== undefined)
            throw new Error("Address is required to activate a customer");
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    set Address(address: Address) {
        this._address = address;
    }

    validate() {
        if (this._id.length === 0)
            throw new Error("ID is required");
        if (this._name.length === 0)
            throw new Error("Name is required");
    }

}