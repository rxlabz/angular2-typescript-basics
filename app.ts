/// <reference path="typings/tsd.d.ts" />

import {Component, View, bootstrap , For, If, EventEmitter } from "angular2/angular2";
import {bind} from 'angular2/di';
import {AngularFire, FirebaseArray} from 'firebase/angularfire';

import {ItemRenderer} from "components/ItemRenderer";
import {ItemForm} from "components/ItemForm";
import {ItemStore} from "services/ItemStore";
import {Todo} from "components/Todo";

@Component({
	selector:'app',
	injectables:[ItemStore]
})
@View({
	templateUrl:"App.html",
	directives:[For, If, ItemForm, ItemRenderer, ItemStore]	
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
	
	removeAll(){
		this.service.removeAll();
	}
}

bootstrap(App);
