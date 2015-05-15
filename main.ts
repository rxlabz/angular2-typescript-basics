/// <reference path="typings/tsd.d.ts" />
/// <reference path="comps/MyModel.ts" />
/// <reference path="comps/itemForm.ts" />

import {Component, View, bootstrap , For, EventEmitter } from "angular2/angular2";

import {itemRenderer} from "comps/itemRenderer";
import {itemForm} from "comps/itemForm"
import {MyModel} from "comps/MyModel"

@Component({
	selector:'app',
	injectables:[MyModel]
})
@View({
	templateUrl:"Main.html",
	directives:[For, itemForm, itemRenderer]
	
})
class AppComponent{
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

bootstrap(AppComponent);
