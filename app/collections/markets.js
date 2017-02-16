'use strict'
class Markets {
    constructor(marketsJSON) {
        this.data = marketsJSON.map(mJSON => new Market(mJSON))
    }
}
