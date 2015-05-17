import { Component, View } from "angular2/angular2";
import {bind} from 'angular2/di';
import {AngularFire, FirebaseArray} from 'firebase/angularfire';

import {MyModel} from "components/MyModel";
import {Todo} from "components/MyModel";

@Component({
	selector:'itemService'
})

export class ItemService{

	model:MyModel;
	fbService:FirebaseArray;
	
	get items():Array<Todo>
	{
		return this.fbService.list;
	}
	
	constructor(m:MyModel){
		var sync = new AngularFire(new Firebase('https://webapi.firebaseio-demo.com/test'));
		this.fbService = sync.asArray();
	}
	
	removeItem( item:Todo ){
		this.fbService.remove(item);
	}
	
	removeAll(){
		
		for( var i = this.items.length - 1 ; i >= 0 ; i -- )
		{
			this.fbService.remove( this.items[i] );
		}
	}
	
	addItem( newItem:string )
	{
		this.fbService.add( new Todo( newItem) );
	}
}