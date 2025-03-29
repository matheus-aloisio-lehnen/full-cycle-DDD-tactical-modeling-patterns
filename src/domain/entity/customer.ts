// Complexidade acidental. (Armazenamento e transporte de dados)
class CustomerEntity {

    private _id: string;
    private _name: string;
    private _address: string = "";
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
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    validate() {
        if (this._id.length === 0)
            throw new Error("ID is required");
        if (this._name.length === 0)
            throw new Error("Name is required");
    }

}