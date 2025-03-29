export default class Address {

    _street: string;
    _city: string;
    _state: string;
    _zipCode: string;
    _country: string;

    constructor(street: string, city: string, state: string, zipCode: string, country: string) {
        this._street = street;
        this._city = city;
        this._state = state;
        this._zipCode = zipCode;
        this._country = country;
        this.validate();
    }

    private validate(): void {
        if (this._street.length === 0) {
            throw new Error('Street is required');
        }
        if (this._city.length === 0) {
            throw new Error('City is required');
        }
        if (this._state.length === 0) {
            throw new Error('State is required');
        }
        if (this._zipCode.length === 0) {
            throw new Error('Zip code is required');
        }
        if (this._country.length === 0) {
            throw new Error('Country is required');
        }
    }

    toString() {
        return `${this._street}, ${this._city}, ${this._state}, ${this._zipCode}, ${this._country}`
    }

}