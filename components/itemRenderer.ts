/// <reference path="../typings/tsd.d.ts" />

import { Component, View, EventEmitter, CORE_DIRECTIVES, ON_PUSH} from "angular2/angular2";
import {
  FormBuilder, 
  Validators,
  FORM_BINDINGS,
  FORM_DIRECTIVES
} from 'angular2/forms';

import {Todo} from "components/Todo"

@Component({
	selector:'item-renderer',
	properties:["item: item"],
	events:['deleteItem','updateItem'],
  	bindings: [FORM_BINDINGS]
})
@View({
	templateUrl:"components/ItemRenderer.html",
	directives:[CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ItemRenderer{
	
	hasError:boolean ;
	
	private _item:Todo;
	
	get item():Todo{
		return this._item;
	}
	
	set item(value:Todo){
		this._item = value;
		
		if( value ){
			
			if( !this.todoForm ){
				var fb = new FormBuilder()
    			this.todoForm = fb.group({
      				title: [ this._item.title, Validators.required ]
    			});
			} else{
				this.todoForm.value.title = this._item.title;
			}
		}
	}
	
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
		//this.todoForm.value.title = this.item.title;
		this.editable = true;
		this.lastValue = this.item.title;
		
	}
	
	onKey($event){
		if( $event && $event.which !== 13 ) return;
		this.save() 
	}
	
	save($event = null){
		if( $event )
			$event.preventDefault();
		
		if( this.todoForm.valid ){
			this.hasError = false;
			this.item.title = this.todoForm.value.title;
		} else{
			this.hasError = true;
			return;
		}
		
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
	
	onItemFocus(){
		console.log("FOCUS");
		
	}
}