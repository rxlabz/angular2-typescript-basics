import { Component, View } from "angular2/angular2";
import {MyModel} from "components/MyModel";

@Component({
	selector:'itemService'
})
export class ItemService{

	model:MyModel;
	
	get items():Array<String>
	{
		return this.model.items;
	}
	
	constructor(m:MyModel){
		this.model= m;
	}
	
	removeItem( item:string ){
		this.model.items.splice( this.model.items.indexOf( item ), 1 )
	}
	
	removeAll(){
		this.model.items = [];
	}
	
	addItem( newItem:string )
	{
		this.model.items.push( newItem );
		console.log("num : " + this.model.items.length);
	}
}