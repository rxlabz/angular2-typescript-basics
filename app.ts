/// <reference path="typings/tsd.d.ts" />

import {Component, View, bootstrap , For, If, EventEmitter } from "angular2/angular2";
import {bind} from 'angular2/di';
import {AngularFire, FirebaseArray} from 'firebase/angularfire';

import {ItemRenderer} from "components/ItemRenderer";
import {ItemForm} from "components/ItemForm";
import {MyModel} from "components/MyModel";
import {Todo} from "components/MyModel";
import {ItemService} from "services/ItemService";

@Component({
	selector:'app',
	injectables:[ItemService,MyModel]
})
@View({
	templateUrl:"App.html",
	directives:[For, If, ItemForm, ItemRenderer, ItemService]	
})
class App{	
	service:ItemService;
	appName:string;
	
	get items():Array<Todo>{
		return this.service.items;
	}
		
	constructor(service:ItemService){
		this.appName = "2Doo"; 
		this.service = service;		
	}
	
	removeItem( item:Todo ){
		this.service.removeItem(item);	 
	}
	
	removeAll(){
		this.service.removeAll();
	}
}

bootstrap(App);
