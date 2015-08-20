/// <reference path="typings/tsd.d.ts" />

import {Component, View, bootstrap , NgFor, NgIf, EventEmitter } from "angular2/angular2";

import {AngularFire, FirebaseArray} from 'firebase/angularfire';

import {ItemRenderer} from "components/ItemRenderer";
import {ItemForm} from "components/ItemForm";
import {ItemStore} from "services/ItemStore";
import {Todo} from "components/Todo";

@Component({
	selector:'app',
	viewInjector:[ItemStore]
})
@View({
	templateUrl:"App.html",
	directives:[NgFor, NgIf, ItemForm, ItemRenderer, ItemStore]	
})
class App{	
	service:ItemStore;
	appName:string;
	
	get items():Array<Todo>{
		return this.service.items;
	}
		
	constructor(service:ItemStore){
		this.appName = "2Doo"; 
		this.service = service;		
	}
	
	removeItem( item:Todo ){
		this.service.removeItem(item);	 
	}
	
	updateItem( item:Todo ){
		this.service.updateItem(item);	 
	}
	
	removeAll(){
		this.service.removeAll();
	}
}

bootstrap(App);
