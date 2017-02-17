'use strict'
class Wines {
	constructor(winesJSON) {
		this.data = winesJSON.map(wJSON => new Wine(wJSON))
	}
}