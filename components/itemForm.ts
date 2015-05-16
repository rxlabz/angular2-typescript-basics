import { Component, View } from "angular2/angular2";

import {ItemService} from "services/ItemService";


@Component({
	selector:'item-form'
})
@View({
	templateUrl:"components/ItemForm.html"
})
export class ItemForm{

	service:ItemService;
	currentValue:string;

	constructor(service:ItemService)
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
