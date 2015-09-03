/// <reference path="../typings/tsd.d.ts" />

import { Component, View, EventEmitter , NgIf } from "angular2/angular2";
import {Todo} from "components/Todo"

@Component({
	selector:'item-renderer',
	properties:["item: item"],
	events:['deleteItem','updateItem']
})
@View({
	templateUrl:"components/ItemRenderer.html",
	directives:[NgIf]
})
export class ItemRenderer{
	item:Todo;
	deleteItem:EventEmitter = new EventEmitter();
	updateItem:EventEmitter = new EventEmitter(); 
	editable:boolean;
	lastValue:string;
	
	constructor(){
		this.editable = false;
	}
	
	removeItem( item:string ){
		this.deleteItem.next(item)
		console.log('remove ' + item);
	}
	
	edit(){
		this.editable = true;
		this.lastValue = this.item.title;
	}
	
	save($event){
		if( $event && $event.which !== 13 )
			return;
			 
		console.log("new title");
		this.updateItem.next(this.item);
		this.editable = false;
	}
	
	autosave($event)
	{
		this.item.title = $event.target.value;	
	}
	
	cancel(){
		this.item.title = this.lastValue;
		this.lastValue = "";
		this.editable=false;
	}
}