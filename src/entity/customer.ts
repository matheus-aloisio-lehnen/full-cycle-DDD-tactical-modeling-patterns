class Customer {

    private _id: string;
    private _name: string;
    private _address: string = "";
    private _active: boolean = true;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
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
// Os dados precisam estar consistentes sempre em relação às regras de negócio.
const customer = new Customer("1", "John");


// A Entidade SEMPRE deve se autovalidar