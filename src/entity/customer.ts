class Customer {

    private _id: string;
    private _name: string;
    private _address: string;
    private _active: boolean;

    constructor(id: string, name: string, address: string, active: boolean) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._active = true;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }

    /*  As funções abaixo correspondem à regra de negócio e não somente o valor do objeto  */

    changeName(name:string) {
        this._name = name;
    }

    activate() {
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

}