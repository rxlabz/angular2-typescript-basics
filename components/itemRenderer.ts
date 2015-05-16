import { Component, View, EventEmitter } from "angular2/angular2";

@Component({
	selector:'item-renderer',
	properties:{item: "item"},
	events:['deleteItem']
})
@View({
	templateUrl:"components/ItemRenderer.html"
})
export class ItemRenderer{
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