/// <reference path="typings/tsd.d.ts" />

import {Component, View, bootstrap , For, EventEmitter } from "angular2/angular2";

import {itemRenderer} from "components/itemRenderer";
import {itemForm} from "components/itemForm"
import {MyModel} from "components/MyModel"

@Component({
	selector:'app',
	injectables:[MyModel]
})
@View({
	templateUrl:"App.html",
	directives:[For, itemForm, itemRenderer]
	
})
class App{
	model:MyModel;	
	appName:string
	
	constructor(m:MyModel){
		this.model = m;
		this.appName = "2Doo";
	}
	
	removeItem( item:string ){
		this.model.items.splice( this.model.items.indexOf( item ), 1 )
	}
}

bootstrap(App);
