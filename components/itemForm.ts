import { Component, View } from "angular2/angular2";

import {ItemStore} from "services/ItemStore";


@Component({
	selector:'item-form'
})
@View({
	templateUrl:"components/ItemForm.html"
})
export class ItemForm{

	service:ItemStore; 
	currentValue:string;

	constructor(service:ItemStore)
	{
		this.service = service;
		this.currentValue = "";
	}

	autosave($event)
	{
		if( $event.which === 13 ){
			this.addName( $event.target );	
		}	
	}
	
	addName(lblName: HTMLInputElement)
	{	
		this.service.addItem( lblName.value );		
		lblName.value = "";	
	}	
	
}
