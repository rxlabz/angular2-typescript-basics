/// <reference path="../typings/tsd.d.ts" />

import { Component, View } from "angular2/angular2";
import {bind} from 'angular2/di';
import {AngularFire, FirebaseArray} from 'firebase/angularfire';

import {Todo} from "components/Todo";

@Component({
	selector:'itemStore'
})

export class ItemStore{
	store:FirebaseArray;
	
	get items():Array<Todo>
	{
		return this.store.list;
	}
	
	constructor(){
		var data = new AngularFire( new Firebase('https://webapi.firebaseio-demo.com/test'));
		this.store = data.asArray();
	}
	
	removeItem( item:Todo ){
		this.store.remove(item);
	}
	
	updateItem( item:Todo ){
		console.log("updateItem " + item.title);
		this.store.save(item);
	}
	
	removeAll(){
		for( var i = this.items.length - 1 ; i >= 0 ; i -- )
		{
			this.store.remove( this.items[i] );
		}
	}
	
	addItem( newItem:string )
	{
		this.store.add( new Todo( newItem) );
	}
}