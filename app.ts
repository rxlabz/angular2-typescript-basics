/// <reference path="typings/tsd.d.ts" />

import {Component, View, bootstrap , For, EventEmitter } from "angular2/angular2";

import {itemRenderer} from "components/itemRenderer";
import {itemForm} from "components/itemForm";
import {MyModel} from "components/MyModel";
import {ItemService} from "services/ItemService";


@Component({
	selector:'app',
	injectables:[ItemService,MyModel]
})
@View({
	templateUrl:"App.html",
	directives:[For, itemForm, itemRenderer, ItemService]
	
})
class App{
	/*model:MyModel;*/	
	service:ItemService
	appName:string;
	
	get items():Array<String>{
		return this.service.items;
	}
	
	constructor(service:ItemService){
		this.appName = "2Doo";
		this.service = service;
		this.items = service.items;
	}
	
	removeItem( item:string ){
		this.service.removeItem(item);
	}
	
	removeAll(){
		this.service.removeAll();
	}
}

bootstrap(App);
