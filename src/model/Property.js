
export default class Property
{

    constructor(property) {
        this._address = property.address_line1;
        this._city = property.ville;
        this._price = property.prix;
        this._currency = property.unit;
        this._image = property.photo;
        this._description = property.description;
        this._type = property.type;
    }


    get key() {
        return this._address.replaceAll(' ', '_');
    }

    get fullPrice() {
        return this._price + this._currency;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get currency() {
        return this._currency;
    }

    set currency(value) {
        this._currency = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }
    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }
}