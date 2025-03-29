// Complexidade de negócio. (Regras de negócio)
class CustomerModel {

    private _id: string;
    private _name: string;
    private _address: string;
    private _active: boolean;

    constructor(id: string, name: string, address: string, active: boolean) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._active = active;
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

}