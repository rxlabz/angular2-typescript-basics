import { Component, View } from "angular2/angular2";

import {MyModel} from "components/MyModel";


@Component({
	selector:'item-form'
})
@View({
	templateUrl:"components/ItemForm.html"
})
export class itemForm{

	model:MyModel;
	currentValue:string;

	constructor(m:MyModel)
	{
		this.model = m;
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
		this.model.items.push( lblName.value );		
		lblName.value = "";	
		console.log("num : " + this.model.items.length);
	}	
	
}
