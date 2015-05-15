/// <reference path="../main.ts" />

import { Component, View, EventEmitter } from "angular2/angular2";

@Component({
	selector:'item-renderer',
	properties:{item: "item"},
	events:['deleteItem']
})
@View({
	templateUrl:"comps/itemRenderer.html"
})
export class itemRenderer{
	
	item:string;
	deleteItem:EventEmitter
	
	constructor(){
		this.deleteItem = new EventEmitter()
	}
	
	removeItem( item:string ){
		this.deleteItem.next()
		console.log('remove ' + item);
	}
}