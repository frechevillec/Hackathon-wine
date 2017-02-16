'use strict'
class Market {
    constructor(json) {
        this._id = json._id;
        this.name = json.name;
        this.position = json.position;
        this.description = json.description;
        this.products = json.products;
        this.version = "1.0"
    }
}
